import mongoose,{Schema} from "mongoose";

const applicationSchema = new Schema({
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
    coverLetter: { type: String }, // Optional cover letter
    resumeUrl: { type: String }, // Resume link, in case the job seeker wants to submit a different one
});

export const Application = mongoose.model('Application', applicationSchema);
