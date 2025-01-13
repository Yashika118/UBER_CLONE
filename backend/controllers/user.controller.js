import userModel from "../models/user.model.js";
import {createUser} from "../services/user.service.js";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";

export const registerUser=async(req,res,next)=>{
    const errors=validationResult(req);             // /register router pe koi bhi condition glt hoti h toh yaha pe error dikhega
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    
    const {fullname,email,password}=req.body;

    const hashedPassword=await userModel.hashPassword(password);

    const user=await createUser({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashedPassword
    });
    await user.save();
    const token=user.generateAuthToken(res);

    res.status(201).json({token,user});

}


export const loginUser=async(req,res,next)=>{
    const errors=validationResult(req);             
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {email,password}=req.body;

    const user=await userModel.findOne({email}).select("+password");

    if(!user){
        return res.status(401).json({message:"Invalid Email or Password"});
    }

    const isMatch=await bcrypt.compare(password,user.password);

    if(!isMatch){
        return res.status(401).json({message:"Invalid Email or Password"});
    }

    const token=user.generateAuthToken(res);

    res.status(200).json({token,user});
}

// agr user authorised h toh usko profile ka data de denge aur 
// agr unauthorised h toh unko unauthorised bta denge
// for this we use authMiddleware.js
export const getUserProfile=async(req,res,next)=>{
    
}