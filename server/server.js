const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const PORT = 4000;

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", socket => {
    console.log("A client connected");
  
    socket.on("locationData", data => {
      console.log("Received location data:", data);
      
      io.emit("locationData", data); 
    });
  
    socket.on("disconnect", () => {
      console.log("A client disconnected");
    });
  });
  

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));