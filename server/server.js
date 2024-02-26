const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 4000;

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
app.use(bodyParser.json());

let todos = [];

//get todos
app.get('/todos', (req, res) => {
  // res.send(todos);
  res.send(todos)
});

//create todo
app.post('/todos', (req, res) => {
  const todo = req.body;
  todos.push(todo);
  res.status(201).json(todo);
});

app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const updatedTodo = req.body;
  todos = todos.map(todo => {
    if (todo.id === parseInt(id)) {
      return { ...todo, ...updatedTodo };
    }
    return todo;
  });
  res.json(todos.find(todo => todo.id === parseInt(id)));
});

app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter(todo => todo.id !== parseInt(id));
  res.status(204).send();
});


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
  

// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});