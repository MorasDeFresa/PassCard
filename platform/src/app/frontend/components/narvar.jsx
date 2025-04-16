"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import correcto para App Router

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const navigateTo = (path) => {
    setIsMobileMenuOpen(false);
    router.push(path);
  };

  return (
    <nav className="bg-green-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <button
                onClick={() => navigateTo("/")}
                className="text-white text-xl font-bold cursor-pointer"
              >
                PassCard Asistencia
              </button>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button
                  onClick={() => navigateTo("/")}
                  className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Inicio
                </button>
                <button
                  onClick={() => navigateTo("/asistencias")}
                  className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Asistencias
                </button>
                <button
                  onClick={() => navigateTo("/estudiantes")}
                  className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Estudiantes
                </button>
                <button
                  onClick={() => navigateTo("/reportes")}
                  className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Reportes
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button
                onClick={() => navigateTo("/frontend/login")}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Cerrar sesión
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-700 focus:outline-none"
            >
              {/* Iconos de hamburguesa y X */}
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button
            onClick={() => navigateTo("/")}
            className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
          >
            Inicio
          </button>
          <button
            onClick={() => navigateTo("/asistencias")}
            className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
          >
            Asistencias
          </button>
          <button
            onClick={() => navigateTo("/estudiantes")}
            className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
          >
            Estudiantes
          </button>
          <button
            onClick={() => navigateTo("/reportes")}
            className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
          >
            Reportes
          </button>
          <button
            onClick={() => navigateTo("/fronend/login")}
            className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </nav>
  );
}
