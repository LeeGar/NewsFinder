var Twitter = require('twitter');
var twitterAPI = require('node-twitter-api');
var Reddit = require('nraw');
//var Users = require('../users/userController.js');
//var userModel = require('../users/userModel.js');
var moment = require('moment');
var async = require('async');

var currentAccessToken;
var currentAccessSecret;
var _requestToken;
var _requestSecret;

var client = new twitterAPI({
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
  callback: process.env.TWITTER_CALLBACK
})
  
var currentUser = new Twitter({
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: currentAccessToken,
  access_token_secret: currentAccessSecret
});

var redditSearcher = new Reddit('Searcher');

//after getRequest is finished, the user is redirected to callback URL
//with the oauth_token & oauth_verifier specified in the URL
var getRequest = function (req, res) {
  client.getRequestToken(function (err, requestToken, requestSecret, results) {
    if (err) {
      console.error("Error occured in TwitterController getRequest call");
      res.statusCode = 500;
      res.send(err);
    } else {
      _requestToken = requestToken;
      _requestSecret = requestSecret;
      res.redirect('https://api.twitter.com/oauth/authenticate?oauth_token=' + requestToken)
    }
  });
};

//using the token and secret obtained in getRequest, we can use getAccess for authentication
var getAccess = function (req, res) {
  var oauth_verifier = req.query.oauth_verifier
  client.getAccessToken(_requestToken, _requestSecret, oauth_verifier, function (err, accessToken, accessTokenSecret, results) {
    if (err) {
      console.error("Error occured in TwitterController getAccess call");
      res.json(err);
    } else {
      //access token & secret belong to individual user -- store into user db
      currentAccessToken = accessToken
      currentAccessSecret = accessTokenSecret

      currentUser = new Twitter({
          consumer_key: process.env.TWITTER_CONSUMER_KEY,
          consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
          access_token_key: accessToken,
          access_token_secret: accessTokenSecret
      })
      res.redirect('http://localhost:3000/home');
    }
  });
};

//* getData is the handler for client submit
var getData = function (req, res) {
  
  //split the search query into words
  var searchInfo = req.body.input.split(' ');
  //parse the array to remove any non alpha-numeric characters
  var parseString = function (searchInfo, callback) {
    searchInfo.forEach(function(word) { 
      word = word.replace(/[^A-Za-z0-9]/g, ''); 
    });
  };
  parseString(searchInfo);

  //send API call to reddit to gather newest results
  var gatherReddits = function (reddit, callback) {
    redditSearcher.search(reddit.join(', ')).sort('new').exec(function (redditResults) {
      if (redditResults === undefined) {
        console.error('Error occured in gatherReddits request');
      }
      callback(null, redditResults); 
    })  
  };

  //parse through reddit response to isolate targeted material
  var parseReddits = function (reddits, callback) {
    var parsedReddits = [];
    reddits.data.children.forEach(function (reddit) {
      parsedReddits.push({
        name: reddit.data.author,
        username: 'Score: '+reddit.data.score,
        location: 'From subreddit '+reddit.data.domain,
        text: reddit.data.title,
        url: reddit.data.url,
        createdAt: moment.unix(reddit.data.created_utc)._d
      })
    });
    callback(null, parsedReddits);
  };

  //send API call to twitter to gather newest tweet results
  var gatherTweets = function (query, callback) {
    currentUser.get('search/tweets', {q: query.join(', '), result_type: 'recent', count: 10}, function(err, res) {
      if (err) {
        console.error('Error occured in twitterController gatherTweets ', err);
        return err;
      }
      callback(null, res.statuses);
    });
  };

  //parse through tweets response, to isolate targeted material
  var parseTweets = function (tweets, callback) {
    var parsedTweets = [];
    tweets.forEach(function (tweet) {
      var urlProvided = ' ';
      if (tweet.entities.urls[0]) {
        urlProvided = tweet.entities.urls[0].url
      }
      parsedTweets.push({
        name: tweet.user.name,
        username: tweet.user.screen_name,
        location: 'From Twitter '+tweet.user.location,
        text: tweet.text,
        url: urlProvided,
        createdAt: tweet.created_at
      });
    });
    callback(null, parsedTweets);
  };

  var gatherParsedReddits = function (searchInfo, callback) {
    async.waterfall([
      async.apply(gatherReddits, searchInfo),
      parseReddits
      ], function (err, redditResults) {
        if (err) {
          console.error("Error retreiving reddit results");
          return res.send(err);
        }
        callback(null, redditResults);
      });  
  };

  var gatherParsedTweets = function (searchInfo, callback) {
    async.waterfall([
      async.apply(gatherTweets, searchInfo),
      parseTweets
      ], function (err, tweetResults) {
        if (err) {
          console.error("Error retreiving twitter results");
          return res.send(err);
        }
        callback(null, tweetResults);
      });
  };

  //Randomly shuffle the array of total results to give a mix of tweets and reddits
  function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
      return array;
  }


  async.parallel([
    function (callback) {
      gatherParsedTweets(searchInfo, callback)
    },
    function (callback) {
      gatherParsedReddits(searchInfo, callback)
    }
    ], function (err, results) {
      if (err) {
        console.error('An error occured in async parallel ', err);
      }
      results = results[0].concat(results[1]);
      var shuffled = shuffleArray(results);
      console.log('shuffled is: ', shuffled);
      res.json(shuffled);
    });

};

module.exports = {
  getRequest: getRequest,
  getAccess: getAccess,
  getData: getData
}
  

