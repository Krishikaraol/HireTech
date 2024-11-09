import express from 'express';
import { applyForJob, getApplicationById, getMyApplications } from '../controller/applicationController';


const router = express.Router();


// Apply for a specific job posting (Job seeker only)
router.post('/:jobId/apply',applyForJob);

// Get all applications made by the logged-in job seek  er
router.get('/',getMyApplications);

// Get details of a specific job application
router.get('/:applicationId',getApplicationById);

module.exports = router;
