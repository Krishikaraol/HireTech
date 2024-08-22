import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        trim:true,

    },
    email:{
        type:String,
        required:true,
        unique:true,

    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:String,
        enum:['job_seeker','employer'],
        require:true
    },
    profile:{
        type:mongoose.Schema.Types.Mixed
    },
    skills: {
        type: [String],  // An array of strings representing skills
        default: [],     // Default to an empty array if no skills are provided
    },
    experience: [{
        company: String,
        title: String,
        from: Date,
        to: Date,
        description: String,
    }],
    education: [{
        institution: String,
        degree: String,
        from: Date,
        to: Date,
    }],
},{timestamps:true})

export const User = mongoose.model("User",userSchema)