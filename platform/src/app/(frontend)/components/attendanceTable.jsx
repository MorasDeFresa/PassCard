"use client";

export default function AttendanceTable({ data }) {
  // Función para convertir UTC a hora de Colombia (UTC-5) con manejo de errores
  const convertToColombiaTime = (utcDateString) => {
    try {
      if (!utcDateString) return { fecha: "--", hora: "--" };

      const date = new Date(utcDateString);

      // Validamos que la fecha sea válida
      if (isNaN(date.getTime())) return { fecha: "--", hora: "--" };

      // Ajustamos a UTC-5 (Colombia)
      date.setHours(date.getHours());

      // Extraemos fecha y hora en formato local
      const fecha = date.toISOString().split("T")[0];
      const hora = date.toTimeString().substring(0, 5);

      return { fecha, hora };
    } catch (error) {
      console.error("Error al convertir fecha:", error);
      return { fecha: "--", hora: "--" };
    }
  };

  // Transformamos los datos de la API con manejo seguro de propiedades anidadas
  const transformedData =
    data?.message?.map((record) => {
      // Manejo seguro de propiedades anidadas
      const nombreCompleto =
        record?.AsistenciasToIdentificaciones?.IdentificacionesToAsistentes
          ?.nomb || "Sin nombre";
      const tipoRegistro = record?.tipo || "Entrada";

      // Convertimos la hora a zona horaria de Colombia
      const { fecha, hora } = convertToColombiaTime(record?.createdAt);

      return {
        nombre: nombreCompleto,
        fecha: fecha,
        hora: hora,
        tipo: tipoRegistro,
      };
    }) || [];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Registro de Asistencia</h1>
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="text-xs uppercase bg-gray-100 text-gray-700">
            <tr>
              <th className="px-6 py-3">Nombre</th>
              <th className="px-6 py-3">Fecha</th>
              <th className="px-6 py-3">Hora (CO)</th>
              <th className="px-6 py-3">Tipo</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transformedData.map((registro, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">
                  {registro.nombre}
                </td>
                <td className="px-6 py-4">{registro.fecha}</td>
                <td className="px-6 py-4">{registro.hora}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      registro.tipo === "Entrada"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {registro.tipo}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      <div className="flex justify-between items-center mt-6">
        <button className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-500">
          Anterior
        </button>
        <div className="flex space-x-2">
          <button className="w-8 h-8 flex items-center justify-center rounded bg-green-700 text-white">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-200">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-200">
            3
          </button>
        </div>
        <button className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-500">
          Siguiente
        </button>
      </div>
    </div>
  );
}
