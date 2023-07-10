import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js'
import morgan from "morgan";
const app = express();

//database
connectDB();

//configure env
dotenv.config();

//middleware
app.use(express.json());
app.use(morgan("dev"));

app.use('/api/v1/auth', authRoutes);


app.get('/', (req,res)=>
{
    res.send({
        message:"Welcome to the ECommerce app"
    })
})

//PORT FOR SERVER
const PORT = process.env.PORT || 8000
 
app.listen(PORT, function()
{
    console.log(`Server running on mode: ${process.env.DEV_MODE} and port: ${PORT}`.bgRed.white);
})