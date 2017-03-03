var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');
var Promise = require('bluebird');

var Schema = mongoose.Schema;

var UrlSchema = new Schema ({

  url: String,
  baseUrl: String,
  code: String,
  title: String,
  visits: Number
});


var Link = mongoose.model('Link', UrlSchema);


UrlSchema.pre('save', function(next) {
  var shasum = crypto.createHash('sha1');
  shasum.update(this.url);
  this.code = shasum.digest('hex').slice(0, 5);
  next();
});
  

module.exports = Link;

