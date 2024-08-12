"use server"
import User from "../modals/userModel";

import dbConnect from "../dbConnect"

export async function createUser(user:any) {
    try{
        await dbConnect();
        const newUser = await User.create(user);
        console.log("User created")
        return JSON.parse(JSON.stringify(newUser));
    }
    catch (err){
        console.log(`User creation failed ${err}`)
    }
}