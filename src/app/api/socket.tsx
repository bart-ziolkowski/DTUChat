import { Server } from "socket.io";

export default function SocketHandler(req, res) {
  if (!res.socket.server.io) {
    console.log("*First use, starting socket.io");
    const io = new Server(res.socket.server);
    res.socket.server.io = io;      
  } else {
    console.log("socket.io already running");
  }
  res.end();
}
