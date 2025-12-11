import { handleApiError } from "@/lib/apiError";
import { connectDB } from "@/lib/mongoose";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import { RecentSession } from "@/models/NCLEX/RecentSessionModel";

export async function GET(req: NextRequest) {
    try {
        await connectDB();
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ success: false, message: "Unauthenticated!" }, { status: 401 });
        }
        const recentSessions = await RecentSession.find({ user: (session.user as { id: string }).id });
        return NextResponse.json({ success: true, recentSessions }, { status: 200 });
    } catch (error) {
        console.log(error);
        return handleApiError(error);
    }
}