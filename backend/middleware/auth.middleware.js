import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import blackListTokenModel from "../models/blackListToken.model.js";


export const authMiddleware=async(req,res,next)=>{
    const token=req.cookies.jwt || req.headers.authorization?.split(" ")[1];
    if(!token){
        return res.status(401).json({message:"Unauthorised User"});
    }

    const isBlackListed=await blackListTokenModel.findOne({token:token});
    if(isBlackListed){
        return res.status(401).json({message:"Unauthorised User"});
    }

    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        const user=await userModel.findById(decoded._id);

        req.user=user;

        return  next();
    } catch (error) {
        return res.status(401).json({message:"Unauthorised User"});
    }
}