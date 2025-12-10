import { IRecentSession } from "@/types/NCLEX";
import mongoose, { Schema } from "mongoose";

const RecentSessionSchema = new Schema<IRecentSession>({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    category: {
        type: String,
        required: true
    },
    totalQuestions: {
        type: Number,
        required: true
    },
    correctAnswers: {
        type: Number,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true,
    }
},
{ timestamps: true }
)

export const RecentSession = mongoose.models.RecentSession || mongoose.model<IRecentSession>("RecentSession", RecentSessionSchema);