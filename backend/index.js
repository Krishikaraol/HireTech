import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

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

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});