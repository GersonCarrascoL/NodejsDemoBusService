'use strict'

var ioEvents = function(io){
    io.on('connection', function (socket) {
        console.log('Socket connected')
    })
}

var init = function(app){
    const server = require('http').Server(app),
        io = require('socket.io')(server)
        
    ioEvents(io)

    return server
}

module.exports = init