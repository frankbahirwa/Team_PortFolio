import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/mongodb";
import UserModel from "@/app/models/model";

export async function POST(req) {
    await dbConnect();

    try {
    const { email, password } = await req.json();
    const user = await UserModel.findOne({ email });

    if (!user || user.password !== password) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
