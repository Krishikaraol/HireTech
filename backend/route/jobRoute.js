import express from 'express';
import { allJob, createJob, deleteJob, getJobById, updateJob } from '../controller/jobController.js';

const router = express.Router();

router.post('/',createJob);

router.get('/',allJob);

router.get('/',getJobById);

router.put('/:jobId',updateJob);

router.delete('/:jobId',deleteJob);

export default router;