'use strict';

var mongoose = require('mongoose');
var PuppySchema = new mongoose.Schema({
    name: String,
    breed: String,
    color: String
});

module.exports = mongoose.model('Puppy', PuppySchema);