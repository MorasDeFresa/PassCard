import { io } from "socket.io-client";

// Conectar al servidor Socket.IO
const socket = io("https://dev.morasdefresa.lat", {
  autoConnect: true,
});

export { socket };
