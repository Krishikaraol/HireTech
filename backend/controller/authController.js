import { User } from "../model/User.model.js";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

export const signup= async (req,res)=>{
    try {
        const {fullname, email,password,role}=req.body;

        const user = await User.findOne({email});
        if (user) return res.status(400).json({message : "User Already Exist!"});

        user = new User({fullname,email,password,role});

        const salt= await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = { user: { id: user.id, role : user.role }};
        const token = jwt.sign(payload,process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ token });

    } catch (error) {
        console.log("Error: ",error);
        res.status(500).json(error)
    }
}

export const login = async (req,res) =>{
    const { password, email} = req.body;
    try {
        const user = await User.findOne({email});
        if (!user) return res.status(400).json({message : "Invalid Email or Password"});

        const isMatch = await User.compare(password,user.password);
        if (!isMatch) return res.status(400).json({message : "Invalid Email or password"});

        const payload = { user: { id: user.id, role : user.role }};
        const token = jwt.sign(payload,process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ token });
        
    } catch (error) {
        console.log("Error: ",error);
        res.status(500).json(error);
    }
}