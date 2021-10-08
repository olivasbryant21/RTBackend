/**
 * This module holds the code that will be in charge of keeping track of whose is connected through websockets
 */
const chatMap = new Map();

const addUser = (socketId, userName) => {
    if(!socketId || !userName) {
        chatMap.set(socketId, userName);
    }
}

const getUser = (socketId) => {
    if(!socketId) {
        return chatMap.get(socketId);
    }
    return null;
}

const deleteUser = (socketId) => {
    return chatMap.delete(socketId);
}

module.exports = {
    add: addUser,
    get: getUser,
    delete: deleteUser
}