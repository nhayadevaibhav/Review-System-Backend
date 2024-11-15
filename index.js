import express, { Router } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import dbConnect from "./config/database.js";
import User from "./models/User.js";



const app=express();

const port=3000;
app.use(express.json());

app.use("/api/v1",Router) //mounting 

dotenv.config();

dbConnect();




app.listen(port,()=>{
    console.log(`Server is running at 3000`);
});

