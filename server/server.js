const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMsg', {
        from:'Admin',
        text: 'Welcome to the chat room',
        createdAt: new Date().getTime()
    });

    socket.broadcast.emit('newMsg', {
        from: 'Admin',
        text: 'New User Joined!',
        createdAt: new Date().getTime()
    });

    socket.on('createMsg', (message) => {
        console.log('created on the clientside: ', message);
        io.emit('newMsg', {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        });


    });



    socket.on('disconnect', () => {
        console.log('User was disconnected')
    });
});


server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});








