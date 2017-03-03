var mongoose = require('mongoose');
var Promise = require('bluebird');
var bcrypt = require('bcrypt-nodejs');

mongoose.connect('mongodb://localhost:27017');

db = mongoose.connection;

db.on('error', function(err) {
  console.log(err, 'failed to connect');
})

db.once('open', function() {
  console.log('mongoose connected!');
});




module.exports = db;

