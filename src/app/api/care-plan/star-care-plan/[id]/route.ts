import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { handleApiError } from "@/lib/apiError";
import { connectDB } from "@/lib/mongoose";
import User from "@/models/User/UserModel";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        await connectDB();

        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ success: false, message: "User not authenticated!" }, { status: 401 });
        }

        const updateTest = await User.updateMany(
            { starredPlans: { $exists: false } },
            { $set: { starredPlans: [] } }
        );
        console.log("udpate test:", updateTest)

        const userId = (session.user as { id: string }).id;
        const user = await User.findById(userId);
        console.log("user:", user)
        const { id } = await params;
        const objectId = new mongoose.Types.ObjectId(id);

        const alreadyStarred = user.starredPlans.some((p: mongoose.Types.ObjectId) => p.toString() === id);

        let updated;

        if (alreadyStarred) {
            updated = await User.findByIdAndUpdate(
                userId,
                { $pull: { starredPlans: objectId } },
                { new: true }
            );
        } else {
            updated = await User.findByIdAndUpdate(
                userId,
                { $addToSet: { starredPlans: objectId } },
                { new: true }
            );
        }

        return NextResponse.json({
            success: true,
            action: alreadyStarred ? "removed" : "added",
            data: updated
        });

    } catch (error) {
        return handleApiError(error);
    }
}
function updateMany(arg0: { starredPlans: { $exists: boolean; }; }, arg1: { $set: { starredPlans: never[]; }; }) {
    throw new Error("Function not implemented.");
}

