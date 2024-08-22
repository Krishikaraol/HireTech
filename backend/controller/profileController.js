import { User } from "../model/User.model.js";

export const getProfile = async (req , res)=>{

    try {
        const user = await User.findById(req.user.id).select('-password');
        if(!user) return res.status(404).json({message : "User not found"});
    } catch (error) {
        res.status(500).json({message: "Error fetching profile"});
    }
}

export const updateProfile = async (req,res)=>{
    const {  name,skills, experience, education } = req.body;

    try {
        const user = await User.findById(req.user.id);
        if(!user) return res.status(404).json({message : "User not found"});

        user.name = name || user.name;
        user.skills = skills || user.skills;
        user.experience = experience || user.experience;
        user.education = education || user.education;

        await user.save();
        res.json(user);
        
    } catch (error) {
        res.status(500).json({message : "Error fetching profile"});
    }
}

export const getProfileById = async (req,res) =>{
    try {
        const user = await User.findById(req.params.userID).select('-password');
        if(!user) return res.status(404).json({message : "User not found"});

        res.json(user);
       } catch (error) {
        res.status(500).json({message : "Error fetching profile"});
    }
}