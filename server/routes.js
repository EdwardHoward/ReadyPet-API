'use strict';

module.exports = function(app){
    app.use('/api/puppies', require('./api/puppy/index'));
}