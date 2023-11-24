import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express()
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connect Mongo")
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("connected",()=>{
    console.log("mongoDB on")
})


app.listen(8000, () => {
    connect();
    console.log("Connect BE")
})