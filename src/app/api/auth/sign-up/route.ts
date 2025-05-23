import { ApiResponse } from "@/lib/ApiResponse";
import { mongoDb } from "@/lib/dbConnect";
import { ApiError } from "@/lib/ErrorResponse";
import { User } from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await mongoDb();
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(new ApiError(400, "All fields are necessary"), {
        status: 400,
      });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        new ApiError(400, "User already exists. Please login "),
        { status: 400 }
      );
    }
    const newUser = await User.create({
      name,
      email,
      password,
    });
    if (!newUser) {
      return NextResponse.json(new ApiError(500, "Internal server error"), {
        status: 500,
      });
    }
    return NextResponse.json(
      new ApiResponse(201, newUser, "User created successfully"),
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      new ApiError(500, "Internal server error, Please try after some time"),
      { status: 500 }
    );
  }
}
