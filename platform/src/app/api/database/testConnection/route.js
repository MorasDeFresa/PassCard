import { testConnection, syncDataBase } from "@/controllers/sync_Sequelize";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const response = await testConnection();
    const response2 = await syncDataBase();
    return NextResponse.json(
      { message: response + response2 },
      { status: 200 }
    );
  } catch (error) {
    console.log(error?.message);

    return NextResponse.json({ message: error?.message }, { status: 400 });
  }
};
