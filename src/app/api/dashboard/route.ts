import { handleApiError } from "@/lib/apiError";
import { connectDB } from "@/lib/mongoose";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { CarePlan } from "@/models/PatientCarePlan/PatientCarePlanModel";
import { RecentSession } from "@/models/NCLEX/RecentSessionModel";

export async function GET(req: NextRequest) {
    try {
        await connectDB();
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ success: false, message: "User unauthenticated!" }, { status: 401 });
        }
        const userId = (session.user as { id: string }).id;
        const sevenDaysPrior = new Date();
        sevenDaysPrior.setDate(sevenDaysPrior.getDate() - 7);

        // Care Plans
        const all_care_plans = await CarePlan.find({ user: userId }).select("createdAt updatedAt");
        const week_care_plans = all_care_plans.filter(i => {
            const date = new Date(i.updatedAt ?? i.createdAt);
            return date >= sevenDaysPrior;
        });
        const carePlans = { number_of_care_plans: all_care_plans.length, number_of_week_care_plans: week_care_plans.length }
        console.log("care plan:", carePlans);

        // NCLEX Insights
        const all_questions_completed = await RecentSession.find({ user: userId }).select("totalQuestions correctAnswers score date");
        const week_questions_completed = all_questions_completed.filter(i => {
            const date = new Date(i.date);
            return date >= sevenDaysPrior;
        })

        const total_completed_questions = all_questions_completed.reduce((sum, i) => sum + i.totalQuestions, 0);
        const week_completed_questions = week_questions_completed.reduce((sum, i) => sum + i.totalQuestions, 0);
        const overall_score = all_questions_completed.reduce((sum, i) => sum + i.score, 0) / all_questions_completed.length;

        const nclexInsights = { total_completed_questions, week_completed_questions, overall_score };

        return NextResponse.json({
            success: true, message: "Hello world",
            dashboard: {
                carePlans,
                nclexInsights
            }
        }, { status: 200 })
    } catch (error) {
        console.log(error);
        return handleApiError(error);
    }
}