import { handleApiError } from "@/lib/apiError";
import { connectDB } from "@/lib/mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { CarePlan } from "@/models/PatientCarePlan/PatientCarePlanModel";

export async function GET() {
    try {
        await connectDB();
        const session = await getServerSession(authOptions);
        if(!session) {
            return NextResponse.json({ success: false, message: "User unauthenticated!" }, { status: 401 })
        }
        const carePlans = await CarePlan.find({ user: (session.user as { id: string }).id }).select("-user -__v");
        return NextResponse.json({ success: true, carePlans }, { status: 200 });
    } catch (error) {
        console.log(error);
        return handleApiError(error);
    }
}