import { User } from "../model/User.model.js";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

export const signup= async (req,res)=>{
    try {
        const {fullname, email,password,username,role}=req.body;

        let user = await User.findOne({email});
        if (user) return res.status(400).json({message : "User Already Exist!"});

        user = new User({fullname,email,password,username,role});

        const salt= await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = { user: { id: user.id, role : user.role }};
        const token = jwt.sign(
            { id: newUser._id, role: newUser.role },
            process.env.JWT_SECRET,  // Ensure this value is defined in .env
            { expiresIn: '1h' }      // Token expiry time
        );
        //const token = jwt.sign(payload,process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ token });

    } catch (error) {
        console.log("Error: ",error);
        res.status(500).json(error)
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        // Compare the password using bcrypt.compare
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate a JWT token if the password is correct
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,  // Use the secret from your .env
            { expiresIn: '1h' }      // Token expiry time
        );

        // Send the token in the response
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// export const login = async (req,res) =>{
//     const { password, email} = req.body;
//     try {
//         const user = await User.findOne({email});
//         if (!user) return res.status(400).json({message : "Invalid Email or Password"});

//         const isMatch = await User.compare(password,user.password);
//         if (!isMatch) return res.status(400).json({message : "Invalid Email or password"});

//         const token = jwt.sign(
//             { id: user._id, role: user.role },
//             process.env.JWT_SECRET,  // Use the secret from your .env
//             { expiresIn: '1h' }      // Token expiry time
//         );

//         // const payload = { user: { id: user.id, role : user.role }};
//         // const token = jwt.sign(payload,process.env.JWT_SECRET, { expiresIn: '1h' });

//         res.status(201).json({ token });
        
//     } catch (error) {
//         console.log("Error: ",error);
//         res.status(500).json(error);
//     }
// }