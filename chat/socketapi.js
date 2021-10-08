const chats = require('../models/chatStorage');
const io = require('socket.io')();
const socketapi = {
    io: io,
}

//Logic
io.on('connection', (socket) => {
    socket.on('chat message', (socketId, msg) => {
        io.to(socketId).emit('chat message', {
            from: socket.id,
            message: msg});
    });
});


module.exports = socketapi;