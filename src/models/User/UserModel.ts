import mongoose, { Document } from "mongoose";

interface IUser extends Document {
    fullName: string;
    email: string;
    password?: string;
    starredPlans: mongoose.Types.ObjectId[]
}

const userSchema = new mongoose.Schema<IUser>({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email already exists"]
    },
    password: {
        type: String,
        required: false
    },
    starredPlans: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "CarePlan",
        default: []
    }
}, { timestamps: true })

export default mongoose.models.User || mongoose.model<IUser>("User", userSchema);