import { createServer } from "http";
import next from "next";
import { Server } from "socket.io";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer(handler);
  const io = new Server(httpServer);

  io.on("connection", (socket) => {
    console.log("Nuevo cliente conectado:", socket.id);

    // Escuchar mensajes del cliente
    socket.on("hello", (mensaje) => {
      console.log("Mensaje recibido:", mensaje);

      // Responder al cliente
      socket.emit("hello", `Servidor dice: Recibí tu mensaje "${mensaje}"`);
    });

    socket.on("disconnect", () => {
      console.log("Cliente desconectado:", socket.id);
    });
  });

  httpServer.listen(port, () => {
    console.log(`> Servidor listo en http://${hostname}:${port}`);
  });
});
