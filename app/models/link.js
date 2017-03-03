var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');
var mongoose = require('mongoose');
var Promise = require('bluebird');


var UrlSchema = mongoose.Schema({

  url: String,
  baseUrl: String,
  code: String,
  title: String,
  visits: Number
});

var createSha = function(url) {
  var shasum = crypto.createHash('sha1');
  shasum.update(url);
  return shasum.digest('hex').slice(0, 5);
};

UrlSchema.pre('save', function(next) {
  var code = createSha(this.url);
  this.code = code;
  next();
});

var Link = mongoose.model('Link', UrlSchema);





  

module.exports = Link;

