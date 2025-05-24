"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  let regexEmail = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Por favor ingresa correo y contraseña");
      return;
    }

    // if (!regexEmail.test(email)) {
    //   setError("Correo invalido");
    //   return;
    // }

    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/auth`,
        {
          method: "POST",
          body: JSON.stringify({
            nombre_Usuario: email,
            contrasena_Usuario: password,
          }),
        }
      );
      const data = await response.json();
      console.log(data);

      if (data?.message?.nombre_Usuario != email) throw new Error("Not found");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (email && password) {
        setError("");
        router.push("/dashboard");
      } else {
        setError("Credenciales incorrectas");
      }
    } catch (err) {
      console.log(err.message);

      setError("Error al iniciar sesión");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl">
        <div className="relative w-full md:w-1/2 aspect-[3/2] md:aspect-auto md:h-auto min-h-[300px]">
          <Image
            src="/PORTADA.png"
            alt="Imagen institucional"
            fill
            className="object-cover"
            style={{
              objectPosition: "rigth center", // o "left center", "center top", etc.
            }}
            quality={80}
            priority
          />
        </div>

        <div className="w-full md:w-1/2 p-8">
          <div className="flex justify-center mb-6">
            <Image
              src="/Logo_Universidad_de_Cundinamarca.png"
              alt="Logo Universidad de Cundinamarca"
              width={120}
              height={60}
              className="h-15"
            />
          </div>

          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Iniciar Sesión
          </h2>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Correo Electrónico
            </label>
            <input
              id="email"
              type="email"
              placeholder="correo@ucundinamarca.com"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            onClick={handleLogin}
            disabled={isLoading}
            className={`w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-200 ${
              isLoading ? "opacity-75 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Procesando...
              </span>
            ) : (
              "Ingresar"
            )}
          </button>

          <div className="text-center mt-4">
            <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
