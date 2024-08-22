import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from './route/authRoute.js';
import profileRoute from './route/profileRoute.js';
import jobRoute from './route/jobRoute.js';

const app=express();

app.use(cors());
app.use(express.json());

dotenv.config();

const port=process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/";

try {
    mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
} catch (error) {
    console.log("Error: ",error);
    
}

app.use('/api/auth', authRoute);
app.use('/api/profile', profileRoute);
app.use('/api/jobs', jobRoute);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});