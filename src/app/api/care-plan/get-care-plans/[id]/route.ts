import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { handleApiError } from "@/lib/apiError";
import { connectDB } from "@/lib/mongoose";
import { CarePlan } from "@/models/PatientCarePlan/PatientCarePlanModel";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        await connectDB();
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ success: false, message: "User not authenticated!" }, { status: 401 });
        }
        const { id } = await params;
        const carePlan = await CarePlan.findOne({ user: (session.user as { id: string }).id, _id:  id});
        console.log("Care plan:", carePlan);
        return NextResponse.json({ success: true, carePlan }, { status: 200 });
    } catch (error) {
        console.log(error);
        return handleApiError(error);
    }
}