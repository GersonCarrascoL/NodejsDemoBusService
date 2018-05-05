$(document).ready(function(){
    //setInterval(listenerServiceBus,3000);
    setInterval(listenerServiceBusEntryFood,3000);
    setInterval(listenerServiceBusFood,3000);
    setInterval(listenerServiceBusDessert,3000);
    setInterval(listenerServiceBusDrink,3000);
});

/*function listenerServiceBus(){
    var token = $('.sas').val();
    
    
    $.ajax({
        url: 'https://arqui-demo2.servicebus.windows.net/example/messages/head',
        method:'DELETE',
        contentType: "application/json",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", token);
            xhr.setRequestHeader("X-Mobile", "false");
        },
        success:function(result){
            if(result!=undefined){
                $('.order').append(
                    '<div class="drink col-md-12">'+
                        '<h3>'+result.name+'</h3>'+
                        '<p>Pedido: '+result.food+'</p>'+
                        '<p>Hora de pedido: '+result.time+'</p>'+
                    '</div>'
                );
            }
        }
    })
}*/

function listenerServiceBusEntryFood(){
    var token = $('.sas-entryfood').val();
    
    $.ajax({
        url: 'https://arqui-demo2.servicebus.windows.net/entryfood/messages/head',
        method:'DELETE',
        contentType: "application/json",
        beforeSend: function (xhr) {
            /* Authorization header */
            xhr.setRequestHeader("Authorization", token);
            xhr.setRequestHeader("X-Mobile", "false");
        },
        success:function(result){
            if(result!=undefined){
                $('.order-entryfood').append(
                    '<div class="drink col-md-12">'+
                        '<h3>'+result.name+'</h3>'+
                        '<p>Pedido: '+result.food+'</p>'+
                        '<p>Hora de pedido: '+result.time+'</p>'+
                    '</div>'
                );
            }
        }
    })
}

function listenerServiceBusFood(){
    var token = $('.sas-food').val();
    
    $.ajax({
        url: 'https://arqui-demo2.servicebus.windows.net/food/messages/head',
        method:'DELETE',
        contentType: "application/json",
        beforeSend: function (xhr) {
            /* Authorization header */
            xhr.setRequestHeader("Authorization", token);
            xhr.setRequestHeader("X-Mobile", "false");
        },
        success:function(result){
            if(result!=undefined){
                $('.order-food').append(
                    '<div class="drink col-md-12">'+
                        '<h3>'+result.name+'</h3>'+
                        '<p>Pedido: '+result.food+'</p>'+
                        '<p>Hora de pedido: '+result.time+'</p>'+
                    '</div>'
                );
            }
        }
    })
}

function listenerServiceBusDessert(){
    var token = $('.sas-dessert').val();
    
    $.ajax({
        url: 'https://arqui-demo2.servicebus.windows.net/dessert/messages/head',
        method:'DELETE',
        contentType: "application/json",
        beforeSend: function (xhr) {
            /* Authorization header */
            xhr.setRequestHeader("Authorization", token);
            xhr.setRequestHeader("X-Mobile", "false");
        },
        success:function(result){
            if(result!=undefined){
                $('.order-dessert').append(
                    '<div class="drink col-md-12">'+
                        '<h3>'+result.name+'</h3>'+
                        '<p>Pedido: '+result.food+'</p>'+
                        '<p>Hora de pedido: '+result.time+'</p>'+
                    '</div>'
                );
            }
        }
    })
}

function listenerServiceBusDrink(){
    var token = $('.sas-drink').val();
    
    $.ajax({
        url: 'https://arqui-demo2.servicebus.windows.net/drink/messages/head',
        method:'DELETE',
        contentType: "application/json",
        beforeSend: function (xhr) {
            /* Authorization header */
            xhr.setRequestHeader("Authorization", token);
            xhr.setRequestHeader("X-Mobile", "false");
        },
        success:function(result){
            if(result!=undefined){
                $('.order-drink').append(
                    '<div class="drink col-md-12">'+
                        '<h3>'+result.name+'</h3>'+
                        '<p>Pedido: '+result.food+'</p>'+
                        '<p>Hora de pedido: '+result.time+'</p>'+
                    '</div>'
                );
            }
        }
    })
}