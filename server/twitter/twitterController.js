var Promise = require('bluebird');
var Twitter = require('twitter');
var twitterAPI = require('node-twitter-api');
var Users = require('../users/userController.js');
var userModel = require('../users/userModel.js');
var keys = require('./twitterKeys');
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


      // userModel.findOne({accessToken: info.accessToken})
      //   .then(function (found) {
      //     if (found) {
      //       console.log('User already exists');
      //     } else {
      //       userModel.create(info).then(function (newUser) {
      //         console.log('welcome new user!', newUser);
      //       })
      //     }
      //   }).catch(function (err) {
      //     console.error('Issue retrieving access to user');
      //     req.statusCode = 404
      //     req.send(err);
      //   });
      res.redirect('http://localhost:3000/home')
    }
  });
};



var getData = function (req, res) {
  var searchInfo = req.body.input.split(' ');

  for (var i = 0; i < searchInfo.length; i++) {
    searchInfo[i] = searchInfo[i].replace(/[^A-Za-z0-9]/g, '');
  };

  var gatherData = function(word, callback) {
    currentUser.get('search/tweets', {q: word, result_type: 'recent', count: 4}, function(err, res) {
      if (err) {
        callback(err);
      }
      callback(null, res.statuses);
    });
  };

  async.map(searchInfo, gatherData, function(err, results) {
    if (err) {
      console.error(err);
      return res.json(err);
    }
    return res.json(results);
  });
};


module.exports = {
  getRequest: getRequest,
  getAccess: getAccess,
  getData: getData
}
  



