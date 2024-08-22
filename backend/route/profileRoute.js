import express from 'express';
import { getProfile, getProfileById, updateProfile } from '../controller/profileController.js';

const router = express.Router();

router.get('/',getProfile);

router.put('/',updateProfile);

router.get('/',getProfileById);

export default router;