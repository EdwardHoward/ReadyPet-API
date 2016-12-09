'use strict'

var express = require('express');
var controller = require('./puppy.control');

var router = express.Router();

router.get('/', controller.find);
router.get('/:id', controller.findById);
router.post('/create', controller.create);
router.delete('/:id', controller.delete);
router.put('/:id', controller.update);

module.exports = router;