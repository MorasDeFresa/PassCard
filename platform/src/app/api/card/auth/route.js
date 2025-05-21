import { authCard } from "@/controllers/auth_card";
import { NextResponse } from "next/server";
export const POST = async (req) => {
  try {
    const { uuid } = await req.json();
    const response = await authCard(uuid);
    return NextResponse.json({ message: response }, { status: 200 });
  } catch (error) {
    console.log(error?.message);

    return NextResponse.json({ message: error?.message }, { status: 400 });
  }
};
