import dbConnect from "@/lib/dbConnect";
import User from "@/lib/modals/userModel";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        await dbConnect();

        // Parse the JSON body of the request
        const { userId, date, enteredFields, predictedCrop, aiSummery } = await req.json();

        const userCheck =  await User.findById(userId);

        const historyData = {
            date: date,
            enteredFields: enteredFields,
            predictedCrop: predictedCrop,
            aiSummery: aiSummery
        }

        if(userCheck){
            try {
                const updation = await User.updateOne(
                    {_id: userId},
                    {$push:{history: historyData}}
                )
                console.log(updation)
            } catch (error) {
                console.log("error in updating the history")
            }
        }
        else{
            console.log("no user found")
        }

        return NextResponse.json({ userId, date, enteredFields, predictedCrop, aiSummery });

    } catch (error) {
        console.error('Error updating history:', error);
        return NextResponse.json({ error: 'Error updating history' }, { status: 500 });
    }
}
