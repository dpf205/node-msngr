var socket = io();

socket.on('connect', function(){
    console.log('connected to server');

    socket.on('newMsg', function (newMsg) {
        console.log('Received new IM: ', newMsg);
    });

    socket.emit('createMsg',{
       from: 'theClientSide@example.com',
       text: 'this is emitted from the client side'
    });
});



socket.on('disconnect', function (){
    console.log('disconnected from server')
});

