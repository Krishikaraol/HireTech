import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    jobId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Job', 
        required: true 
    },
    jobSeekerId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    status: { 
        type: String,
         enum: ['Applied', 'Shortlisted', 'Rejected', 'Hired'], 
         default: 'Applied' },
    appliedDate: { type: Date, default: Date.now },
    coverLetter: { type: String },
    resumeUrl: { type: String },
});

export const Application = mongoose.model('Application', applicationSchema);
