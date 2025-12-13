import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User/UserModel";
import { handleApiError } from "@/lib/apiError";
import { connectDB } from "@/lib/mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function GET(req: NextRequest) {
    try {
        await connectDB();

        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ success: false, message: "User not authenticated!" }, { status: 401 });
        }

        const userId = (session.user as { id: string }).id;
        const starredPlans = await User.findById(userId).select("starredPlans -_id").populate("starredPlans");
        return NextResponse.json({ success: true, starred_plans: starredPlans?.starredPlans }, { status: 200 })
    } catch (error) {
        console.log(error);
        return handleApiError(error);
    }
}