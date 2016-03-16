var Q = require('q');
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true
  }
});


module.exports = mongoose.model('users', userSchema);