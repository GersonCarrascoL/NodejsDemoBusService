'use strict'
const crypto = require('crypto'),
    util = require('util')

const path = require('path')

class ExampleController{
    index(req, res){
        let tokenExample = getSASToken('arqui-demo2','example','RootManageSharedAccessKey','j6svY26uyvAGcqhoz/8iQ6gLvPhFFQl5P0Bv4kWrV4Q=');
        let tokenEntryFood = getSASToken('arqui-demo2','entryfood','RootManageSharedAccessKey','j6svY26uyvAGcqhoz/8iQ6gLvPhFFQl5P0Bv4kWrV4Q=');
        let tokenFood = getSASToken('arqui-demo2','food','RootManageSharedAccessKey','j6svY26uyvAGcqhoz/8iQ6gLvPhFFQl5P0Bv4kWrV4Q=');
        let tokenDessert = getSASToken('arqui-demo2','dessert','RootManageSharedAccessKey','j6svY26uyvAGcqhoz/8iQ6gLvPhFFQl5P0Bv4kWrV4Q=');
        let tokenDrink = getSASToken('arqui-demo2','drink','RootManageSharedAccessKey','j6svY26uyvAGcqhoz/8iQ6gLvPhFFQl5P0Bv4kWrV4Q=');
        
        return res.render('index', {
            tokenExample:tokenExample,
            tokenEntryFood:tokenEntryFood,
            tokenFood:tokenFood,
            tokenDessert:tokenDessert,
            tokenDrink:tokenDrink
        });
    }

}

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

module.exports = ExampleController