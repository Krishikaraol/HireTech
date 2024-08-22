import { Application } from "../model/Aplication.model";
import { Job } from "../model/Job.model";

export const applyForJob = async (req, res) => {
  const { coverLetter } = req.body;

  try {
    const job = await Job.findById(req.params.jobId);
    if (!job) return res.status(404).json({ message: 'Job not found' });

    const application = new Application({
      job: job.id,
      applicant: req.user.id,
      employer: job.employer,
      coverLetter,
    });

    await application.save();
    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMyApplications = async (req, res) => {
  try {
    const applications = await Application.find({ applicant: req.user.id });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getApplicationById = async (req, res) => {
  try {
    const application = await Application.findById(req.params.applicationId);
    if (!application) return res.status(404).json({ message: 'Application not found' });

    res.json(application);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
