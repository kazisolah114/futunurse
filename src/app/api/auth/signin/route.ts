import bcrypt from "bcryptjs";
import { configDotenv } from "dotenv";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import User from "@/models/User/UserModel";
import { connectDB } from "@/lib/mongoose";
configDotenv()

const JWT_SECRET = process.env.JWT_SECRET as string;

export async function POST(req: Request) {
    await connectDB();
    try {
        const { email, password } = await req.json();
        if(!email || !password) {
            return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
        }
        const user = await User.findOne({ email });
        if(!user) {
            return NextResponse.json({ success: false, message: "Invalid credentials, user not found" }, { status: 400 });
        }
        const valid = await bcrypt.compare(password, user.password);
        if(!valid) {
            return NextResponse.json({ message: "Invalid credentials, password mismatch" }, { status: 400 });
        }
        if (!JWT_SECRET) {
            return NextResponse.json({ message: "JWT secret is not configured" }, { status: 500 });
        }
        const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1h' });

        return NextResponse.json({ message: "Signin successful!", token }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error", error }, { status: 500 } );
    }
}