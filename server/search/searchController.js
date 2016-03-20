var Twitter = require('twitter');
var twitterAPI = require('node-twitter-api');
var Reddit = require('nraw');
var Users = require('../users/userController.js');
var userModel = require('../users/userModel.js');
var keys = require('./twitterKeys');
var moment = require('moment');
var async = require('async');

var currentAccessToken;
var currentAccessSecret;
var _requestToken;
var _requestSecret;

var client = new twitterAPI({
  consumerKey: keys.TWITTER_CONSUMER_KEY,
  consumerSecret: keys.TWITTER_CONSUMER_SECRET,
  callback: keys.TWITTER_CALLBACK
})
  
var currentUser = new Twitter({
  consumerKey: keys.TWITTER_CONSUMER_KEY,
  consumerSecret: keys.TWITTER_CONSUMER_SECRET,
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
      res.send(err);
    } else {
      //access token & secret belong to individual user -- store into user db
      currentAccessToken = accessToken
      currentAccessSecret = accessTokenSecret

      currentUser = new Twitter({
          consumer_key: keys.TWITTER_CONSUMER_KEY,
          consumer_secret: keys.TWITTER_CONSUMER_SECRET,
          access_token_key: accessToken,
          access_token_secret: accessTokenSecret
      })
      res.redirect('http://localhost:3000/home')
    }
  });
};

//* getData is the handler for client submit
var getData = function (req, res) {
  
  var searchInfo = req.body.input.split(' ');
  
  var parseString = function (array, callback) {
    array.forEach(function(word) { 
      word = word.replace(/[^A-Za-z0-9]/g, ''); 
    });
    callback(null, array.join(', '), array.join(', '));
  };

  var gatherReddits = function (reddit, twitter, callback) {
    var random = reddit[Math.floor(Math.random() * reddit.length)];
    redditSearcher.search(reddit).sort('new').exec(function (redditResults) {
      if (redditResults === undefined) {
        console.error('Error occured in gatherReddits request');
      }
      callback(null, twitter, redditResults); 
    })  
  };

  var gatherTweets = function (query, reddits, callback) {
    currentUser.get('search/tweets', {q: query, result_type: 'recent', count: 10}, function(err, res) {
      if (err) {
        console.error('Error occured in twitterController gatherTweets ', err);
        return err;
      }
      callback(null, res.statuses, reddits);
    });
  };

  var parseTweets = function (tweets, reddits, callback) {
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
    callback(null, parsedTweets, reddits);
  };

  var parseReddits = function (tweetResults, reddits, callback) {

    reddits.data.children.forEach(function (reddit) {
      tweetResults.push({
        name: reddit.data.author,
        username: 'Score: '+reddit.data.score,
        location: 'From subreddit '+reddit.data.domain,
        text: reddit.data.title,
        url: reddit.data.url,
        createdAt: moment.unix(reddit.data.created_utc)._d
      })
    });
    callback(null, tweetResults);
  };

  var randomizeResults = function (results, callback) {
    var i = 0;
    var j = 0;
    var z = null;
    for (var i = results.length - 1; i > 0; i -=1) {
      j = Math.floor(Math.random () * (i+1));
      z = results[i];
      results[i] = results[j];
      results[j] = z;
    }
    callback(null, results);
  };

  async.waterfall([
    async.apply(parseString, searchInfo),
    gatherReddits,
    gatherTweets,
    parseTweets,
    parseReddits,
    randomizeResults 
    ], function (err, result) {
      if (err) {
        console.error('An error occured in async waterfall', err);
        return res.json(err);
      }
      return res.json(result);
    });
};

module.exports = {
  getRequest: getRequest,
  getAccess: getAccess,
  getData: getData
}
  



