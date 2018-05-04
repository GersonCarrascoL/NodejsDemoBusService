$(document).ready(function(){
    setInterval(listenerServiceBus(),3000);
});

function listenerServiceBus(){
    $.ajax({
        url: 'https://arqui-demo2.servicebus.windows.net/example/messages/head',
        type:'DELETE',
        header:{
            'Authorization': getSASToken('arqui-demo2','example','RootManageSharedAccessKey','j6svY26uyvAGcqhoz/8iQ6gLvPhFFQl5P0Bv4kWrV4Q=')
        },
        success:function(result){
            console.log(header.Authorization);
        }
    })
}

/*var azureBusService = function(azure,config){
    var serviceBusService = azure.createServiceBusService(config.SbConnection.AZURE_SERVICEBUS_ACCESS_KEY)

    serviceBusService.createQueueIfNotExists('getorder',function(err){
        if(err){
            console.log(err.stack)
        }else{
            console.log('El queue example ya existe,token:'+ getSASToken('arqui-demo2','login','RootManageSharedAccessKey','j6svY26uyvAGcqhoz/8iQ6gLvPhFFQl5P0Bv4kWrV4Q='))
        }
    })

    setInterval(function(){
        serviceBusService.receiveQueueMessage('getorder',{ isPeekLock: true },function(err,receivedMessage){
            if(!err){
                //console.log(serviceBusService)
                console.log(receivedMessage)
                var data = cc.getCourses(serviceBusService)
                data.then(function(resolve){
                    console.log(resolve)
                }).catch(function(reject){
                    console.log(reject)
                })
                //console.log(data)
                serviceBusService.sendQueueMessage('responsegetcourses','data',function(err){
                    if(!err){
                        console.log('Message sended to queue getcourses')
                    }else{
                        console.log('Error sending message')
                    }
                })
                serviceBusService.deleteMessage(receivedMessage, function (deleteError){
                    if(!deleteError){
                        console.log('mensaje borrado')
                    }
                });
            }
            console.log('listen getcourses') 
        })
    },3000)

    setInterval(function(){
        serviceBusService.receiveQueueMessage('login',{ isPeekLock:true },function(err,receivedMessage){

        })
    },3000)

    setInterval(function(){
        serviceBusService.receiveQueueMessage('enrollment',{ isPeekLock:true },function(err,receivedMessage){
            
        })
    },3000)

    setInterval(function(){
        serviceBusService.receiveQueueMessage('registerstudent',{ isPeekLock:true },function(err,receivedMessage){
            
        })
    },3000)
    
    //CREATE TOKEN
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
}*/
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