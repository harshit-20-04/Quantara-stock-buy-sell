const {UserModel} = require("../models/UserModel");
const {createSecretToken} = require("../utils/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async(req, res)=>{
    try{
        const {email, username, password, mobileNumber, createdAt} = req.body;
        const existingUser = await UserModel.findOne({"email":email});
        if (existingUser){
            return res.json({message: "User Already existed"});
        }
        const user = UserModel.create({email, username, password, mobileNumber, createdAt});
        const token = createSecretToken(user._id);
        res.cookie("token", token,{
            withCredentials :true,
            httpOnly:false,
        });
        res.status(201).json({message: "User Signed In Sucessfully"});
    }catch(error){
        console.error(error);
    };
}

module.exports.Login = async(req, res)=>{
    try{
        const { email, password } = req.body;
        if (!email || !password){
            return res.json({message:"All field are required"});
        }
        const user = await UserModel.findOne({ email });
        if (!user){
            return res.json({message:"Incorrect password or email"});
        }
        const auth = await bcrypt.compare(password, user.password);
        if (!auth){
            return res.json({message:"Incorrect password or email"});
        }
        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly:true,
            sameSite:"lax",
        });
        res.status(201).json({success: true,message: "User Logged In Sucessfully"});
    }catch(error){
        console.error(error);
    }
}