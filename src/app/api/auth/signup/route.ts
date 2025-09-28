import { handleApiError } from "@/lib/apiError";
import { connectDB } from "@/lib/mongoose";
import User from "@/models/User/UserModel";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
     await connectDB();
     try {
        const { fullName, email, password, confirmPassword } = await req.json();
        if(!fullName || !email || !password || !confirmPassword) {
            return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        }
        const passwordMatches = password === confirmPassword;
        if(!passwordMatches) {
            return NextResponse.json({ message: "Confirm password do not match" }, { status: 400 });
        }
        const user = await User.findOne({ email });
        if(user) {
            return NextResponse.json({ success: false, message: "User already exists" }, { status: 400 });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            fullName,
            email,
            password: hashedPassword
        });
        return NextResponse.json({ success: true, message: "User created successfully", user: newUser }, { status: 201 });
     } catch (error) {
        return handleApiError(error)
     }
}