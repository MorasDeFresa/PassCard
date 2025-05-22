const { createServer } = require("http");
const next = require("next");
const { InitializeWebSocket } = require("./configuration_socket_server");
const cors = require("cors");

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

const corsOptions = {
  origin: [process.env.URL_LOCAL, process.env.URL_DEV],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  credentials: true, // Si necesitas enviar cookies o autenticación
};

app.prepare().then(() => {
  const httpServer = createServer((req, res) => {
    // Aplicar CORS primero
    cors(corsOptions)(req, res, () => {
      // Luego pasar al manejador de Next.js
      handler(req, res);
    });
  });
  InitializeWebSocket({ httpServer });
  httpServer.listen(port, () => {
    console.log(`> Servidor listo en http://${hostname}:${port}`);
  });
});
