import { handleApiError } from "@/lib/apiError";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

interface User {
    fullName: string;
    email: string;
    password: string;
}

const users: User[] = [];

export async function POST(req: Request) {
     try {
        const { fullName, email, password } = await req.json();
        if(!fullName || !email || !password) {
            return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        }
        const userExists = users.find(user => user.email === email);
        if(userExists) {
            return NextResponse.json({ message: "User already exists" }, { status: 400 });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        users.push({
            fullName,
            email,
            password: hashedPassword
        })
        return NextResponse.json({ message: "User created successfully" }, { status: 201 });
     } catch (error) {
        return handleApiError(error)
     }
}