import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        trim:true,

    },
    email:{
        type:String,
        required:true,
        unique:true,

    },
    username: {
        type: String,
        required: true,
        unique: true, 
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:String,
        enum:['job_seeker','employer'],
        require:true
    },
    profile:{
        type:mongoose.Schema.Types.Mixed
    },
    skills: {
        type: [String],  
        default: [],     
    },
    experience: [{
        company: String,
        title: String,
        from: Date,
        to: Date,
        description: String,
    }],
    education: [{
        institution: String,
        degree: String,
        from: Date,
        to: Date,
    }],
},{timestamps:true})

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        next(err);
    }
});

export const User = mongoose.model("User",userSchema)