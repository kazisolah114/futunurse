import { handleApiError } from "@/lib/apiError";
import CarePlan from "@/models/PatientCarePlan/PatientCarePlanModel";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ success: false, message: "User not authenticated!" }, { status: 401 })
        }
        const body = await req.json();
        const newCarePlan = await CarePlan.create({
            user: (session.user as { id: string }).id,
            carePlans: body.body
        })
        console.log("New care plan:", newCarePlan)
        return NextResponse.json({ success: true, message: "New care plan added", newCarePlan })
    } catch (error) {
        console.log(error);
        return handleApiError(error);
    }
}