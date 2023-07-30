require("dotenv").config();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const express = require("express");
const app = express();

app.use(cors());

const port = process.env.PORT || 3000;

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const onlineUsers: Set<String> = new Set();
const chatBot: String = "Chat Bot";

io.on("connection", (socket: any) => {
  socket.on("user connected", (user: any) => {
    console.log("user connected");
    socket.user = user;
    onlineUsers.add(user);
    io.emit("user connected", [...onlineUsers]);
  });

  socket.on("user disconnected", () => {
    console.log("user disconnected");
    onlineUsers.delete(socket.userId);
    io.emit("user disconnected", socket.userId);
  });

  socket.on("chat message", (data: any) => {
    io.emit("chat message", data);
  });

  socket.on("typing", (data: any) => {
    socket.broadcast.emit("typing", data);
  });

  socket.on("join room", (data: any) => {
    const { user, room } = data;
    socket.join(room);

    let __currentTime__ = Date.now();

    socket.broadcast.to(room).emit("receive message", {
      user: chatBot,
      message: `${user} has joined the room.`,
      __currentTime__,
    });

    socket.emit("receive message", {
      user: chatBot,
      message: `Welcome ${user}!`,
      __currentTime__,
    });
  });
});

server.listen(port);
