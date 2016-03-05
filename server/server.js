var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var port = process.env.PORT || 3000;
var dbUri = process.env.MONGOLAB_URI || 'mongodb://localhost/news';

var app = express();

require('./config/middleware.js')(app, express);
require('./config/router.js')(app, express);

mongoose.connect(dbUri)




app.listen(port, function (err) {
  if (err) {
    return console.log(err)
  } else {
    console.log('now listening in on port: ', port)
  }
})

module.exports = app;

