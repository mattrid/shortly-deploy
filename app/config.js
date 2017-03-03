var mongoose = require('mongoose');
var Promise = require('bluebird');
var bcrypt = require('bcrypt-nodejs');

//make the mongoose connect to local host to run on local host, keep port 27017

mongoose.connect('mongodb://138.197.211.144:4568');

db = mongoose.connection;

db.on('error', function(err) {
  console.log(err, 'failed to connect');
})

db.once('open', function() {
  console.log('mongoose connected!');
});




module.exports = db;

