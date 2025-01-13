import captainModel from "../models/captain.model.js";
import { createCaptain } from "../services/captain.service.js";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import blackListTokenModel from "../models/blackListToken.model.js";



// register
export const registerCaptain=async(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    
    const {fullname,email,password,vehicle}=req.body;

    const isCaptainAlreadyExist=await captainModel.findOne({email});

    if(isCaptainAlreadyExist){
        return res.status(400).json({message:"Captain already exists"});
    }

    const hashedPassword=await captainModel.hashPassword(password);

    const captain=await createCaptain({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashedPassword,
        color:vehicle.color,
        plate:vehicle.plate,
        capacity:vehicle.capacity,
        vehicleType:vehicle.vehicleType 
    });
    await captain.save();
    const token=captain.generateAuthToken(res);
    res.status(201).json({token,captain});
}


// login
export const loginCaptain=async(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    
    const {email,password}=req.body;

    const captain=await captainModel.findOne({email}).select("+password");

    if(!captain){
        return res.status(400).json({message:"Captain doesn't exist"});
    }

    const isMatch=await bcrypt.compare(password,captain.password);

    if(!isMatch){
        return res.status(400).json({message:"Invalid email or password"});
    }

    const token=captain.generateAuthToken(res);
    res.status(200).json({token,captain});
}


// profile
export const getCaptainProfile=async(req,res,next)=>{
    res.status(200).json(req.captain);
}

// logout
export const logoutCaptain=async(req,res,next)=>{
    const token=req.cookies.jwt || req.headers.authorization.split(" ")[1];
    const blackListToken=await blackListTokenModel({token});
    await blackListToken.save();
    res.clearCookie("jwt");
    // await blackListTokenModel.deleteOne({ token });
    res.status(200).json({message:"Logged out successfully"}); 
}