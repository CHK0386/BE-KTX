import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./Routes/auth.js"
import dormitoryRouter from "./Routes/dormitory.js"

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
app.use(express.json());
app.use("/api/auth",authRouter);
app.use("/api/dormitory",dormitoryRouter);
app.use("/api/rooms",authRouter);
app.use("/api/User",authRouter);


app.listen(8800, () => {
    connect();
    console.log("Connect BE");
})