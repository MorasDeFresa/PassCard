import { LoadInitialData } from "@/controllers/initial_data";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const response = await LoadInitialData();
    return NextResponse.json({ message: response }, { status: 200 });
  } catch (error) {
    console.log(error?.message);

    return NextResponse.json({ message: error?.message }, { status: 400 });
  }
};
