import { allAsistencias } from "@/methods/methods_Asistencia";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const asistencias = await allAsistencias();
    return NextResponse.json({ message: asistencias }, { status: 200 });
  } catch (error) {
    console.log(error?.message);

    return NextResponse.json({ message: error?.message }, { status: 400 });
  }
};
