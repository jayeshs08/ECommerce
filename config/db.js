import mongoose from "mongoose";
import colors from 'colors';
import dotenv from 'dotenv';

dotenv.config();
const connectDB = async()=>
{
    try
    {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to MongoDB ${conn.connection.host}`.bgGreen.white);
    }
    catch(error)
    {
        console.log(`Error in connection: ${error}`.bgRed.white)
    }
}
export default connectDB;