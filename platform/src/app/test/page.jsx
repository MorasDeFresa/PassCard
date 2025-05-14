"use client";

import { useEffect, useState } from "react";
import { socket } from "@/app/socket";

export default function Test() {
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");
  const [mensajes, setMensajes] = useState([]);

  const enviarMensaje = () => {
    socket.io.engine.emit("hello", "Hola desde el cliente!");
  };

  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }

    function onConnect() {
      setIsConnected(true);
      setTransport(socket.io.engine.transport.name);

      socket.io.engine.on("hello", (mensaje) => {
        console.log("Mensaje recibido:", mensaje);
        setMensajes((prev) => [...prev, mensaje]);
      });

      socket.io.engine.on("upgrade", (transport) => {
        setTransport(transport.name);
      });
    }

    function onDisconnect() {
      setIsConnected(false);
      setTransport("N/A");
    }

    // Configurar listeners
    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    // Escuchar mensajes del servidor

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("hello");
    };
  }, []);

  return (
    <div>
      <p>Estado: {isConnected ? "Conectado" : "Desconectado"}</p>
      <p>Transporte: {transport}</p>

      <button
        onClick={() => {
          enviarMensaje();
        }}
      >
        Enviar mensaje al servidor
      </button>

      <div>
        <h3>Mensajes recibidos:</h3>
        <ul>
          {mensajes.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
