'use strict';

var mongoose = require('mongoose');
var PuppySchema = new mongoose.Schema({
    name: String,
    breed: String,
    color: String
});

PuppySchema.methods.findSimilarBreeds = function(func){
    return this.model('Puppy').find({ breed: this.breed }, func);
}

PuppySchema.post('init', function(puppy){
    console.log("woof! " + puppy.name);
});
module.exports = mongoose.model('Puppy', PuppySchema);