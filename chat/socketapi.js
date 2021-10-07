const io = require('socket.io')();
const socketapi = {
    io: io,
}

//Logic
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});


module.exports = socketapi;