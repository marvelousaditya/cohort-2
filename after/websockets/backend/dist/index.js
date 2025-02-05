"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on("connection", (socket) => {
    console.log("connected");
    socket.on("message", (e) => {
        const message = e.toString();
        message === "ping" ? socket.send("pong") : "";
    });
});
