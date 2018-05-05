'use strict'

const express = require('express'),
    mongoose = require('mongoose'),
    app = express(),
    ioServer = require('./services/socket')(app),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    restFul  = require('express-method-override')('_method'),
    routesExample = require('./routes/example-router'),
    pug = require('pug'),
    path = require('path'),
    port = (process.env.PORT || 5000),
    cors = require('cors')

app
    .set('port', port)
    .set('views',path.join(__dirname,'views'))
    .set('view engine','pug')

    .use(express.static(path.join(__dirname,'public')))
    .use(cors())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: false}))
    .use(morgan('dev'))
    .use(restFul)
    .use(routesExample)

ioServer.listen(port)
