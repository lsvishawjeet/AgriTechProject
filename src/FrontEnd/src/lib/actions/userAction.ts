"use server"
import User from "../modals/userModel";

import dbConnect from "../dbConnect"

export async function createUser(userData: any) {
    try {
        await dbConnect()
        const newUser = new User(userData);
        await newUser.save();
        return newUser;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}

export async function updateHistory(data: any) {
    try {
        await dbConnect()
        const {userId, searchData} = data;
        const update = User.updateOne(
            {_id: userId},
            {$push:{history: searchData}}
        )
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}
