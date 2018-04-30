'use strict'

var ioEvents = function(io){
    io.on('connection', function (socket) {
        console.log('Socket connected')
    })
}

var azureBusService = function(azure,config){
    var serviceBusService = azure.createServiceBusService(config.SbConnection)

}

var init = function(app){
    const server = require('http').Server(app),
        io = require('socket.io')(server),
        mongoose = require('mongoose'),
        config = require('../config'),
        azure = require('azure')
    
    azureBusService(azure,config)
    ioEvents(io)
    mongoose.connect('mongodb://localhost/namedb',()=>{
        console.log('Mongodb connect!');
    })
    return server
}

module.exports = init