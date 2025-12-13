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

        const userId = (session.user as { id: string }).id;
        const user = await User.findById(userId);
        console.log("user:", user)
        const { id } = await params;
        // const objectId = new mongoose.Types.ObjectId(id);

        // const alreadyStarred = user.starredPlans.some((p: mongoose.Types.ObjectId) => p.toString() === id);
        const alreadyStarred = user.starredPlans.includes(id);


        let updated;

        if (alreadyStarred) {
            updated = await User.findByIdAndUpdate(
                userId,
                { $pull: { starredPlans: id } },
                { new: true }
            );
        } else {
            updated = await User.findByIdAndUpdate(
                userId,
                { $addToSet: { starredPlans: id } },
                { new: true }
            );
        }
        console.log("updated:", updated)
        return NextResponse.json({
            success: true,
            action: alreadyStarred ? "removed" : "added",
            data: updated
        });

    } catch (error) {
        console.log(error)
        return handleApiError(error);
    }
}