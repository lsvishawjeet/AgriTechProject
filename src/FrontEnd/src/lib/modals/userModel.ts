import mongoose, {Schema, Document, model, models} from "mongoose";

export interface UserI extends Document{
    clerkId: string,
    email: string,
    username: string,
    photo:string,
    firstName: string,
    lastName: string,
    history: HistoryI[]
}
export interface HistoryI extends Document{
    date: Date,
    enteredFields: EnteredFieldsI[],
    predictedCrop: string,
    aiSummery: string
}
export interface EnteredFieldsI extends Document{
    nitrogen:string,
    phosphorus: string,
    potassium: string,
    temperature: string,
    humidity: string,
    phValue: string,
    rainfall: string,
}

const enteredFieldsSchema = new Schema<EnteredFieldsI>({
    nitrogen:{
        type: String,
        required: true
    },
    phosphorus:{
        type: String,
        required: true
    },
    potassium:{
        type: String,
        required: true
    },
    temperature:{
        type: String,
        required: true
    },
    humidity:{
        type: String,
        required: true
    },
    phValue:{
        type: String,
        required: true
    },
    rainfall:{
        type: String,
        required: true
    },
})

const historySchema = new Schema<HistoryI>({
    date: {
        type: Date,
    },
    enteredFields:{
        type: [enteredFieldsSchema],
    },
    predictedCrop:{
        type: String
    },
    aiSummery:{
        type: String
    }
})

const UserSchema = new Schema<UserI>({
    clerkId:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    username:{
        type: String,
    },
    photo:{
        type: String
    },
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    history:{
        type: [historySchema],
    }
})

const User = models?.User || model("User", UserSchema)

export default User;
