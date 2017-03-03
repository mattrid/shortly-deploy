var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');
var Promise = require('bluebird');



var UsersSchema = mongoose.Schema({
  id: Number,
  username: {type: String, unique: true},
  password: String,
});

UsersSchema.pre('save', function(next) {
  var cipher = Promise.promisify(bcrypt.hash);
  return cipher(this.password, null, null).bind(this)
    .then(function(hash) {
      this.password = hash;
      next();
    });
});

var User = mongoose.model('User', UsersSchema);

User.comparePassword = function(attemptedPassword, savedpw,  cb) {
    bcrypt.compare(attemptedPassword, savedpw, function(err, isMatch) {
      if(err) {
        console.log('in if')
        return cb(err);
      } else {
        cb(null, isMatch);
      }
    });
};

module.exports = User;
