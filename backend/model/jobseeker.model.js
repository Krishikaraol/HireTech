import { type } from "@testing-library/user-event/dist/type";
import mongoose, { model } from "mongoose";

const jobSeekerSchema = mongoose.Schema({
    username:{
        type:String,
        ref:'User',
        require:true,
        unique:true,
        trim:true
    },
    skills:[String],
    experience:[{
        company:String,
        title:String,
        from:Date,
        to:Date,
        description:String
    }],
    education:[{
        institution:String,
        title:String,
        from:Date,
        To:Date,
        description:String
    }],
    appliedjobs:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Job',
    }],
    appliedinternships:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Internship',
    }],
    savedjobs:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Job',
    }]
})

export const jobSeeker = model.Schema("jobSeeker",jobSeekerSchema)