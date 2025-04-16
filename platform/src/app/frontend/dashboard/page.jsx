import AttendanceTable from "../components/attendanceTable";
import Navbar from "../components/narvar";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-4">Registro de Asistencia</h1>
        <AttendanceTable />
      </div>
    </div>
  );
}
