"use client";

import Image from "next/image";


export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#79C000] text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-8 py-20 max-w-7xl mx-auto">
        <div className="z-10 md:w-1/2">
          <div className="mb-4">
            <span className="bg-[#38A3A5] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Nuevo
            </span>
            <span className="ml-2 text-sm text-gray-600">Versión 1.0 lanzada</span>
          </div>

          <h1 className="text-5xl font-extrabold mb-6 leading-tight text-[#38A3A5]">
            Control de Acceso Inteligente
          </h1>

          <p className="text-lg text-gray-700 mb-8">
            Optimiza el ingreso a tus instalaciones con sistemas automatizados, rápidos y seguros. El futuro ya llegó.
          </p>

          <div className="flex space-x-4">
            <a
              href="/frontend/login"
              className="bg-[#57CC99] hover:bg-[#80ED99] text-white font-bold py-3 px-6 rounded-lg transition duration-200"
            >
              Iniciar Sesión
            </a>
            <a
              href="#clientes"
              className="text-[#38A3A5] font-bold py-3 px-6 rounded-lg border border-[#38A3A5] hover:bg-[#38A3A5] hover:text-white transition duration-200"
            >
              Ver Clientes →
            </a>
          </div>
        </div>

        <div className="relative w-full md:w-1/2 mt-10 md:mt-0">
          <Image
            src="/panchito.png"
            alt="Sistema de control de acceso"
            width={600}
            height={400}
            className="rounded-xl shadow-xl object-contain mx-auto bg-white p-4"
            priority
          />
        </div>
      </section>

      {/* Servicios Section */}
<section className="py-20 bg-[#C7F9CC] text-gray-800">
  <h2 className="text-4xl font-bold text-center mb-12">Nuestros Servicios</h2>
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 px-6">
    {/* Servicio 1 */}
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:scale-105 transition">
      <Image src="/acceso-rapido.png" alt="Acceso Rápido" width={80} height={80} className="mb-6" />
      <h3 className="text-2xl font-bold mb-4 text-[#38A3A5]">Acceso Rápido y Sin Contacto</h3>
      <p className="text-gray-600">
        Lectura instantánea de tarjetas para un ingreso fluido, sin necesidad de contacto físico.
      </p>
    </div>

    {/* Servicio 2 */}
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:scale-105 transition">
      <Image src="/seguridad.png" alt="Seguridad Mejorada" width={80} height={80} className="mb-6" />
      <h3 className="text-2xl font-bold mb-4 text-[#38A3A5]">Seguridad Mejorada</h3>
      <p className="text-gray-600">
        Control de accesos en tiempo real y reportes automatizados para mayor seguridad en sus instalaciones.
      </p>
    </div>

    {/* Servicio 3 */}
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:scale-105 transition">
      <Image src="/automatizacion.png" alt="Automatización Total" width={80} height={80} className="mb-6" />
      <h3 className="text-2xl font-bold mb-4 text-[#38A3A5]">Automatización Total</h3>
      <p className="text-gray-600">
        Optimización de procesos de ingreso y salida para mejorar la eficiencia operativa.
      </p>
    </div>
  </div>
</section>


      {/* Clientes Section */}
      <section id="clientes" className="py-20 bg-[#57CC99] text-white">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestros Clientes</h2>
        <div className="flex flex-wrap items-center justify-center gap-12 max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center">
            <Image
              src="/cliente1.png"
              alt="Cliente 1"
              width={120}
              height={120}
              className="mb-4"
            />
            <p className="text-center">Universidad Central</p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/cliente2.png"
              alt="Cliente 2"
              width={120}
              height={120}
              className="mb-4"
            />
            <p className="text-center">Colegio San Marcos</p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/cliente3.png"
              alt="Cliente 3"
              width={120}
              height={120}
              className="mb-4"
            />
            <p className="text-center">Instituto Tech</p>
          </div>
        </div>
      </section>

      {/* Carrusel de imágenes */}
      <section className="py-20 bg-[#80ED99]">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Nuestras Instalaciones</h2>
        <div className="flex overflow-x-auto gap-6 px-6">
          <Image src="/instalacion1.jpg" alt="Instalación 1" width={400} height={300} className="rounded-lg flex-shrink-0" />
          <Image src="/instalacion2.jpg" alt="Instalación 2" width={400} height={300} className="rounded-lg flex-shrink-0" />
          <Image src="/instalacion3.jpg" alt="Instalación 3" width={400} height={300} className="rounded-lg flex-shrink-0" />
        </div>
      </section>

      {/* Frase motivadora */}
      <section className="py-16 bg-[#C7F9CC] text-center px-6">
        <blockquote className="text-3xl italic font-semibold text-gray-700 max-w-4xl mx-auto">
          "La automatización aplicada de forma inteligente es la clave para una nueva revolución industrial." <br />
          <span className="text-[#38A3A5]">(Bill Gates)</span>
        </blockquote>
      </section>

      {/* Footer */}
      <footer className="bg-[#38A3A5] text-white py-10">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Control de Acceso UdeC</h3>
            <p className="text-sm">Modernizando la gestión educativa con tecnología de vanguardia.</p>
          </div>

          <div className="flex space-x-6 text-2xl">
            

          </div>
        </div>

        <div className="mt-6 text-center text-xs text-[#C7F9CC]">
          &copy; 2025 Universidad de Cundinamarca. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
