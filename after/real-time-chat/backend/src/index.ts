import { WebSocket, WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

// let allSockets = new Map<String, WebSocket[]>();
interface User {
  socket: WebSocket;
  room: string;
}

let allSockets: User[] = [];

let userCount = 0;
wss.on("connection", (socket) => {
  userCount += 1;
  console.log(`User ${userCount} connected`);

  socket.on("message", (message) => {
    const parsedMessage = JSON.parse(message as unknown as string);
    if (parsedMessage.type === "join") {
      allSockets.push({ socket, room: parsedMessage.payload.roomId });
    }
    if (parsedMessage.type === "chat") {
      const currentUserRoom = allSockets.find((s) => s.socket == socket)?.room;

      allSockets.forEach((s) => {
        if (s.room == currentUserRoom)
          s.socket.send(parsedMessage.payload.message);
      });
    }
  });
});
