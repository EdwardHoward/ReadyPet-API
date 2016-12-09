var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');
    
var config;

try{
    config = require(__dirname + '/config');
}catch(err){
    config = {};
    console.log("Couldn't find /config.js file");
}

mongoose.connect(config.mongoAddress);

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://edwardhoward.io');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());
app.listen(config.port, config.ip, 0, function(err){
    if(err) console.log(err);
    console.log("Server listening on port " + config.port);
});

require('./routes')(app);

