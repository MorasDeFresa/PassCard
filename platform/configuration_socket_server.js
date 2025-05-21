const { Server } = require("socket.io");

const InitializeWebSocket = ({ httpServer }) => {
  const io = new Server(httpServer);
  io.on("connection", (socket) => {
    console.log("Nuevo cliente conectado:", socket.id);

    // Escuchar mensajes del cliente
    socket.on("hello", (mensaje) => {
      console.log(mensaje);

      socket.broadcast.emit("hello", mensaje);
    });

    socket.on("join-room", (room) => {
      socket.join(room);
    });

    socket.on("test", (message, cb) => {
      console.log(message);
      cb(message);
    });

    socket.on("disconnect", () => {
      console.log("Cliente desconectado:", socket.id);
    });
  });
};

module.exports = { InitializeWebSocket };
