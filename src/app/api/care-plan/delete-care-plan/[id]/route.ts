import { handleApiError } from "@/lib/apiError";
import { connectDB } from "@/lib/mongoose";
import { CarePlan } from "@/models/PatientCarePlan/PatientCarePlanModel";
import { NextResponse } from "next/server";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    try {
        await connectDB();
        const { id } = await params;
        console.log("id:", id);
        await CarePlan.findOneAndDelete({ _id: id });
        return NextResponse.json({ success: true, message: "Care plan deleted successfully!" });
    } catch (error) {
        console.log(error);
        return handleApiError(error);
    }
}