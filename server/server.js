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
        from: 'dave@example.com',
        text: 'this a new message from Dave!!',
        createdAt: new Date()
    });

    socket.on('createMsg', (createMsg) => {
        console.log('created on the clientside: ', createMsg);
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected')
    });
});


server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});








