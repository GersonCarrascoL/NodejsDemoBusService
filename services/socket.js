'use strict'
const CourseController = require('../controllers/course-controller'),
    cc = new CourseController,
    crypto = require('crypto'),
    util = require('util')

var ioEvents = function(io){
    io.on('connection', function (socket) {
        console.log('Socket connected')
    })
}

var azureBusService = function(azure,config){
    var serviceBusService = azure.createServiceBusService(config.SbConnection.AZURE_SERVICEBUS_ACCESS_KEY)

    serviceBusService.createQueueIfNotExists('example',function(err){
        if(err){
            console.log(err.stack)
        }else{
            console.log('El queue example ya existe,token:'+ getSASToken('arqui-demo2','example','RootManageSharedAccessKey','j6svY26uyvAGcqhoz/8iQ6gLvPhFFQl5P0Bv4kWrV4Q='))
        }
    })

    serviceBusService.createQueueIfNotExists('getcourses',function(err){
        if(err){
            console.log(err.stack)
        }else{
            console.log('El queue getcourses ya existe,token:'+ getSASToken('arqui-demo2','getcourses','RootManageSharedAccessKey','j6svY26uyvAGcqhoz/8iQ6gLvPhFFQl5P0Bv4kWrV4Q='))
        }
    })
    //getSASToken('arqui-demo2','example','RootManageSharedAccessKey','j6svY26uyvAGcqhoz/8iQ6gLvPhFFQl5P0Bv4kWrV4Q=')
    function getSASToken(serviceNamespace, entityPath, sasKeyName, sasKey) { 
        var uri = "http://" + serviceNamespace + 
        ".servicebus.windows.net/" + entityPath; 
    
        var encodedResourceUri = encodeURIComponent(uri); 
    
        var expireInSeconds = Math.round(minutesFromNow(5) / 1000);
    
        var plainSignature = encodedResourceUri + "\n" + expireInSeconds; 
    
        var signature = crypto.createHmac('sha256', sasKey)
                              .update(plainSignature)
                              .digest('base64'); 
    
        return util.format('SharedAccessSignature sig=%s&se=%s&skn=%s&sr=%s', 
                    encodeURIComponent(signature), expireInSeconds, sasKeyName, encodedResourceUri);; 
    
        function minutesFromNow(minutes) {
              var date = new Date();
              date.setMinutes(date.getMinutes() + minutes);
              return date;
        }
    }

    serviceBusService.receiveQueueMessage('getcourses',{ isPeekLock: true },function(err,receivedMessage){
        if(!err){
            console.log(receivedMessage)
            serviceBusService.deleteMessage(receivedMessage, function (deleteError){
                if(!deleteError){
                    console.log('mensaje borrado')
                }
            });
        }else{
            console.log('Error')
        }     
    })
}

var init = function(app){
    const server = require('http').Server(app),
        io = require('socket.io')(server),
        mongoose = require('mongoose'),
        config = require('../config'),
        azure = require('azure-sb')
    
    azureBusService(azure,config)
    ioEvents(io)
    /*mongoose.connect('mongodb://university-test:YpoACyur1wsrKC9BzliurKSBnqN6PgGblUYhjI5vNEayUFtp2tKdZ7zAJvNJ32g4X5liBm8VazOhI5fLCKyOrQ%3D%3D@university-test.documents.azure.com:10255/?ssl=true',(err)=>{
        if(err) console.log(err.stack)
        console.log('Mongodb connect!');
    })*/
    return server
}

module.exports = init