import AttendanceTable from "../components/attendanceTable";
import Navbar from "../components/narvar";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <AttendanceTable />
      </div>
    </div>
  );
}
