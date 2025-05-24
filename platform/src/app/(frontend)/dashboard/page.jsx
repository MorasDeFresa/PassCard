"use client";

import { useEffect, useState } from "react";
import AttendanceTable from "../components/attendanceTable";
import Navbar from "../components/narvar";

export default function Dashboard() {
  const [attendanceData, setAttendanceData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/asistencias`,
          {
            method: "GET",
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        setAttendanceData(data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <AttendanceTable data={attendanceData} />
      </div>
    </div>
  );
}
