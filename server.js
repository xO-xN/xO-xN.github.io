// server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',  // 允许所有来源连接，或者替换为你的前端地址
        methods: ['GET', 'POST']
    }
});

io.on('connection', (socket) => {
    console.log('A user connected: ' + socket.id);

    // 监听客户端发送的消息
    socket.on('message', (msg) => {
        console.log('Message received: ', msg);
        io.emit('message', msg); // 广播消息给所有连接的客户端
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// 监听端口
server.listen(process.env.PORT || 3000, () => {
    console.log('Server running on port 3000');
});
