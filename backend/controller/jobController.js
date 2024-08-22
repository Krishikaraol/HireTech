import { Job } from "../model/Job.model.js";

export const createJob = async (req, res) =>{
    const {location, salaryRange,jobType,title,description } = req.body;

    try {
        const job = new Job({employer:req.user.id,title,location,description,salaryRange,jobType});
        await job.save();
        res.status(200).json(job);
        
    } catch (error) {
        res.status(500).json({message : error.message});
    }
};

export const allJob = async (req,res) =>{
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
        
    } catch (error) {
        res.status(500).json({message : "Error"})
    }
};

export const getJobById = async (req,res) =>{
    try {
        const job = await Job.findById(req,params.jobId);
        if(!job) return res.status(404).json({ message: 'Job not found' });

    } catch (error) {
        res.status(500).json({message : "Error"});
    }
};

export const updateJob = async (req, res) => {
    const { title, description, location, salary, type } = req.body;
  
    try {
      const job = await Job.findById(req.params.jobId);
      if (!job) return res.status(404).json({ message: 'Job not found' });
  
      if (job.employer.toString() !== req.user.id) {
        return res.status(403).json({ message: 'Not authorized' });
      }
  
      job.title = title || job.title;
      job.description = description || job.description;
      job.location = location || job.location;
      job.salary = salary || job.salary;
      job.type = type || job.type;
  
      await job.save();
      res.json(job);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  export const deleteJob = async (req, res) => {
    try {
      const job = await Job.findById(req.params.jobId);
      if (!job) return res.status(404).json({ message: 'Job not found' });
  
      if (job.employer.toString() !== req.user.id) {
        return res.status(403).json({ message: 'Not authorized' });
      }
  
      await job.remove();
      res.json({ message: 'Job removed' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };