import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket) => {
  console.log("connected");

  socket.on("message", (e) => {
    const message = e.toString();
    message === "ping" ? socket.send("pong") : "";
  });
});
