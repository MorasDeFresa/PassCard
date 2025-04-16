const data = [
  { nombre: "Juan Pérez", fecha: "2025-04-16", hora: "08:00", tipo: "Entrada" },
  { nombre: "Ana Torres", fecha: "2025-04-16", hora: "08:05", tipo: "Entrada" },
  { nombre: "Juan Pérez", fecha: "2025-04-16", hora: "17:00", tipo: "Salida" },
];

export default function AttendanceTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-left">Nombre</th>
            <th className="p-3 text-left">Fecha</th>
            <th className="p-3 text-left">Hora</th>
            <th className="p-3 text-left">Tipo</th>
          </tr>
        </thead>
        <tbody>
          {data.map((registro, index) => (
            <tr key={index} className="text-center border-t">
              <td className="p-3">{registro.nombre}</td>
              <td className="p-3">{registro.fecha}</td>
              <td className="p-3">{registro.hora}</td>
              <td className="p-3">{registro.tipo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
