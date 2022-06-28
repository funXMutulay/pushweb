self.addEventListener('push',function(e){
    var options = {
        body: 'This notification shows what goes on ' ,
        icon: 'images/example.png' ,
        vibrate: [100, 50 , 100] ,
        data: {

            dateOfArrival: Date.now() ,
            primaryKey:'2'
                },
        actions:[
            {
                action: 'explore' ,
                title: 'explore this new world',
                icon: 'images/checkmark.png'
        },
            
            {action:'close', title : 'Close', icon:'image/xmark.png'}
        ]
    };
    e.waitUntil(self.registration.showNotification('Successfull run',options));

});