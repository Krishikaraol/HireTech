import mongoose from "mongoose";

const employerSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        ref:'User'
    },
    companyName:{
        type:String,
        required:true,

    },
    companyDescription:{
        type:String,

    },
    companyWebsite:{
        type:String,
    },
    postedJobs:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Job'
    }]
})

export const Employer = model.Schema("Employer",employerSchema)