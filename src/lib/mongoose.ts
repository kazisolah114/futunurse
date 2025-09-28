import { configDotenv } from "dotenv";
import mongoose from "mongoose";
configDotenv();

let isConnected: boolean = false;

export const connectDB = async () => {
    if(isConnected) return;
    try {
        await mongoose.connect(process.env.MONGODB_URI!);
        isConnected = true;
        console.log("DB Connected Successful!");
    } catch(error) {
        console.log("Error connecting to database", error);
        throw new Error("Error connecting to database");
    }
}