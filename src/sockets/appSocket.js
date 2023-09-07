import { Server } from "socket.io";

let io;

export const createSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });
  io.on("connection", (socket) => {
    console.log("New user connected");

    socket.on("joinRoom", (roomId) => {
      socket.join(roomId);
    });

    socket.on("joinRoom", (roomId) => {
      console.log(`User ${socket.id} joined room ${roomId}`);
      socket.join(roomId);
    });

    socket.on("sendMessage", (message) => {
      console.log(`Message sent to room ${message.chat}:`, message);
      if (message && message.chat) {
        io.to(message.chat).emit("receiveMessage", { message });
      } else {
        console.log("error");
      }
    });

    socket.on("sendMessage", (message) => {
      if (message && message.chat) {
        io.to(message.chat).emit("receiveMessage", { message });
      } else {
        console.log("error");
      }
    });

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });
};
