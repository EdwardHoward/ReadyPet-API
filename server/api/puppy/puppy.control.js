'use strict';

// Create
// Read
// Update
// Delete

var Puppy = require('./puppy.model');

function handleError(err, res){
    console.error(err);
    res.status(500).json({message: err});
}

module.exports = {
    find : function(req, res){
        Puppy.find({}, function(err, puppies){
            err && handleError(err, res);
            res.status(200).json(puppies);
        });
    },
    findById: function(req, res){
        Puppy.findById(req.params.id, function(err, puppy){
            err && handleError(err, res);
            res.status(200).json(puppy);
        });
    },
    findSimilar: function(req, res){
        
        Puppy.findById(req.params.id, function(err, puppy){
            err && handleError(err, res);

            puppy.findSimilarBreeds(function(err, puppies){
                res.status(200).json(puppies);
            })
        })
},
    create: function(req, res){
        var pup = req.body;
        
        var puppy = new Puppy({
            name: pup.name,
            breed: pup.breed,
            color: pup.color
        });
        
        puppy.save(function(err){
            err && handleError(err, res);
            res.status(200).json(puppy);
        });
    },
    delete: function(req, res){
        Puppy.remove({_id: req.params.id}, function(err){
            err && handleError(err, res);
            res.status(200).json({message: 'Puppy Deleted'});
        });
    },
    update: function(req, res){
        Puppy.findById(req.params.id, function(err, puppy){
            err && handleError(err, res);
            var pup = req.body;
            
            puppy.name = pup.name;
            puppy.breed = pup.breed;
            puppy.color = pup.color;
            
            puppy.save(function(err){
                err && handleError(err, res); 
                res.status(200).json(puppy);
            })
        })
    }
}
