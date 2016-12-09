'use strict';

// Create
// Read
// Update
// Delete

var Puppy = require('./puppy.model');

function respondWithResult(res, statusCode){
    statusCode = statusCode || 200;
    
    return function(entity){
        if(entity){
            return res.status(statusCode).json(entity);
        }
        return null;
    }
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

module.exports = {
    find : function(req, res){
        Puppy.find({}, function(err, puppies){
            res.status(200).json(puppies);
        });
    },
    findById: function(req, res){
        Puppy.findById(req.params.id, function(err, puppy){
            res.status(200).json(puppy);
        });
    },
    create: function(req, res){
        var pup = req.body;
        
        var puppy = new Puppy({
            name: pup.name,
            breed: pup.breed,
            color: pup.color
        });
        
        puppy.save(function(){
            res.status(200).json(puppy);
        });
    },
    delete: function(req, res){
        Puppy.remove({_id: req.params.id}, function(err){
            res.status(200).json({message: 'Puppy removed'});
        });
    },
    update: function(req, res){
        Puppy.findById(req.params.id, function(err, puppy){

            var pup = req.body;
            
            puppy.name = pup.name;
            puppy.breed = pup.breed;
            puppy.color = pup.color;
            
            puppy.save(function(err){
                res.status(200).json(puppy);
            })
        })
    }
}
