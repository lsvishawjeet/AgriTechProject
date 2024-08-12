
import dbConnect from "@/lib/dbConnect";
import User from "@/lib/modals/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { userId: string } }) {
    const { userId } = params;
    await dbConnect();
    console.log("Received userId:", userId);

    try {
        const verifyUserId = await User.findById(userId)
        if (verifyUserId) {
            console.log("User history:", verifyUserId.history);
            return NextResponse.json(verifyUserId.history); 
        } else {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }
    } catch (error) {
        console.log("Error fetching history:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}