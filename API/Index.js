import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./Routes/auth.js"
import dormitoryRouter from "./Routes/dormitorys.js"
import roomRouter from "./Routes/rooms.js"
import UserRouter from "./Routes/Users.js"
import cookieParser from "cookie-parser"
import cors from "cors"
const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connect Mongo")
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
});



//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/dormitorys", dormitoryRouter);
app.use("/api/rooms", roomRouter);
app.use("/api/User", UserRouter);
app.post('/api/bookings',);



app.listen(8800, () => {
    connect();
    console.log("Connect BE");
})