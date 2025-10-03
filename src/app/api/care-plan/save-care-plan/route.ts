import { handleApiError } from "@/lib/apiError";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { CarePlan } from "@/models/PatientCarePlan/PatientCarePlanModel";
import { connectDB } from "@/lib/mongoose";

export async function POST(req: Request) {
    try {
        await connectDB();
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ success: false, message: "User not authenticated!" }, { status: 401 })
        }
        const { body } = await req.json();
        console.log("body:", body)
        const newCarePlan = await CarePlan.create({
            user: (session.user as { id: string }).id,
            patient: body.patientData,
            diagnoses: body.diagnoses
        });
        console.log("New care plan:", newCarePlan)
        return NextResponse.json({ success: true, message: "New care plan added", newCarePlan }, { status: 201 });
    } catch (error) {
        console.log(error);
        return handleApiError(error);
    }
}