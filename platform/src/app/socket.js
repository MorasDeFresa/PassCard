import { io } from "socket.io-client";

// Conectar al servidor Socket.IO
const socket = io("http://localhost:3000", {
  autoConnect: true,
});

export { socket };
