'use strict'

const express = require('express'),
    router = express.Router(),
    ExampleController = require('../controllers/example-controller'),
    ec = new ExampleController()

router
    .get('/',ec.index)

module.exports = router
