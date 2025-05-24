import { authUser } from "@/controllers/auth_user";
import { NextResponse } from "next/server";
export const POST = async (req) => {
  try {
    const JsonData = await req.json();
    const response = await authUser({ JsonData });
    return NextResponse.json({ message: response }, { status: 200 });
  } catch (error) {
    console.log(error?.message);
    return NextResponse.json({ message: error?.message }, { status: 400 });
  }
};
