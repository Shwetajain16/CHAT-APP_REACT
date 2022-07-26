const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messagesRoutes = require("./routes/messagesRoutes");
const connectDatabase = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorhandler");

dotenv.config();
connectDatabase();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api is available");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messagesRoutes);

 app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 9000;

const server = app.listen(9000, console.log(`Server Started on port ${PORT}`));

const io = require("socket.io")(server, {
  pingTimeout: 50000,
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("connected to socket.io");

  socket.on("setup", (userData) => {
    socket.join(userData._id);
    console.log(userData._id);
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("User Joines the Room:+room");
  });

  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

  socket.on("new message", (newMessageReceived) => {
    console.log("new message");

    var chat = newMessageReceived.chat;
    if (!chat.users) return console.log("chat.users not defined");

    chat.users.forEach((user) => {
      if (user._id == newMessageReceived.sender._id) return;

      socket.in(user._id).emit("message received", newMessageReceived);
    });
  });
});
