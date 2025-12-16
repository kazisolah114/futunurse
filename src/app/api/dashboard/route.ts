import { handleApiError } from "@/lib/apiError";
import { connectDB } from "@/lib/mongoose";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { CarePlan } from "@/models/PatientCarePlan/PatientCarePlanModel";

export async function GET(req: NextRequest) {
    try {
        await connectDB();
        const session = await getServerSession(authOptions);
        if(!session) {
            return NextResponse.json({ success: false, message: "User unauthenticated!" }, { status: 401 });
        }
        const userId = (session.user as {id: string}).id;
        const sevenDaysPrior = new Date();
        sevenDaysPrior.setDate(sevenDaysPrior.getDate() - 7);

        // Care Plans
        const all_care_plans = await CarePlan.find({ user: userId }).select("createdAt updatedAt");
        const week_care_plans = all_care_plans.filter(i => {
            const date = new Date(i.updatedAt ?? i.createdAt);
            return date >= sevenDaysPrior;
        });
        const carePlan = {number_of_care_plans: all_care_plans.length, number_of_week_care_plans: week_care_plans.length}
        console.log("care plan:", carePlan);

        return NextResponse.json({ success: true, message: "Hello world",
            dashboard: {
                carePlan,
        } }, { status: 200 })
    } catch (error) {
        console.log(error);
        return handleApiError(error);
    }
}