"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { socket } from "@/app/socket_client";

export default function RfidAuthPage() {
  const [authStatus, setAuthStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");

  // Simulación de conexión con ESP32 (reemplaza con tu lógica real)
  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }
    socket.emit("hello", "Hola desde el cliente!");
    function onConnect() {
      setIsConnected(true);
      setTransport(socket.io.engine.transport.name);

      socket.on("hello", (message) => {
        console.log("frontend", message);

        setAuthStatus(message == "true");
        setTimeout(() => {
          resetScanner();
        }, 3000);
      });

      // socket.emit("test", "f8b8b106-b1dc-4f87-b248-fb1db9e5cd95", searchCard);

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

    const simulateRfid = () => {
      // Aquí iría tu conexión real con el ESP32
      // Ejemplo con WebSocket:
      // const ws = new WebSocket('ws://direccion-esp32');
      // ws.onmessage = (e) => {
      //   const data = JSON.parse(e.data);
      //   setAuthStatus(data.valid);
      //   setLoading(false);
      // };

      // Simulación temporal:
      setTimeout(() => {
        // Cambiar a false para simular error
        setAuthStatus(null);
        setLoading(false);
      }, 3000);
    };

    if (authStatus === null) {
      simulateRfid();
    }

    // Escuchar mensajes del servidor

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("hello");
    };
  }, [authStatus]);

  const resetScanner = () => {
    setAuthStatus(null);
    setLoading(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md text-center">
        {/* Logo institucional */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/Logo_Universidad_de_Cundinamarca.png"
            alt="Logo Universidad"
            width={150}
            height={80}
          />
        </div>

        {/* Estado de autenticación */}
        {authStatus === null && (
          <>
            <div className="animate-pulse mb-6">
              <div className="w-24 h-24 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {loading ? "Verificando..." : "Acerca tu tarjeta"}
            </h2>
            <p className="text-gray-600 mb-6">
              {loading
                ? "Validando credenciales..."
                : "Coloca tu tarjeta RFID cerca del lector"}
            </p>
            {loading && (
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full animate-pulse"
                  style={{ width: "45%" }}
                ></div>
              </div>
            )}
          </>
        )}

        {/* Estado de éxito */}
        {authStatus === true && (
          <>
            <div className="mb-6">
              <div className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              ¡Autenticación exitosa!
            </h2>
            <p className="text-gray-600 mb-6">Bienvenido(a) al sistema</p>
            <div className="bg-green-50 text-green-800 p-4 rounded-lg mb-6">
              <p>Acceso autorizado</p>
            </div>
            <button
              onClick={resetScanner}
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg"
            >
              Volver a escanear
            </button>
          </>
        )}

        {/* Estado de error */}
        {authStatus === false && (
          <>
            <div className="mb-6">
              <div className="w-24 h-24 mx-auto bg-red-100 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Autenticación fallida
            </h2>
            <p className="text-gray-600 mb-6">Tarjeta no reconocida</p>
            <div className="bg-red-50 text-red-800 p-4 rounded-lg mb-6">
              <p>Acceso no autorizado</p>
            </div>
            <button
              onClick={resetScanner}
              className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-lg"
            >
              Intentar nuevamente
            </button>
          </>
        )}
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>Sistema de autenticación RFID - Universidad de Cundinamarca</p>
        <p className="mt-1">Versión 1.0</p>
      </div>
    </div>
  );
}
