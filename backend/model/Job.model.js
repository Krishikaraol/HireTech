import mongoose from "mongoose";
const jobSchema = mongoose.Schema({
    employerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    jobType: { type: String, enum: ['Full-time', 'Part-time', 'Internship', 'Contract'], required: true },
    industry: { type: String, required: true },
    salaryRange: { type: String },
    experienceRequired: { type: String },
    skillsRequired: [String],
    applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // List of applicants
    postedDate: { type: Date, default: Date.now },
    applicationDeadline: { type: Date },
});

export const Job = mongoose.model("Job",jobSchema);