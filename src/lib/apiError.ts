import { NextResponse } from "next/server";

export const handleApiError = (error: unknown) => {
    console.error("API Error:", error);
    if (error instanceof Error) {
        console.error("Error Message:", error.message);
        console.error("Stack Trace:", error.stack);
        return NextResponse.json({
            message: "Internal Server Error",
            error: error.message
        },
            { status: 500 }
        )
    }
    return NextResponse.json({
        message: "Error Unknown", error: String(error)
    },
        { status: 500 }
    )
}