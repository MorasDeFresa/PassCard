const { createServer } = require("http");
const next = require("next");
const { InitializeWebSocket } = require("./configuration_socket_server");

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer(handler);
  InitializeWebSocket({ httpServer });
  httpServer.listen(port, () => {
    console.log(`> Servidor listo en http://${hostname}:${port}`);
  });
});
