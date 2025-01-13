// captain means who is driving the car
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const captainSchema=new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3, `First name must be atleast 3 characters long.`],
        },
        lastname:{
            type:String,
            minlength:[3, `Last name must be atleast 3 characters long.`],
        }
   },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:[5, `Email must be atleast 5 character long.`],
        match:[/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, `Please enter a valid email.`]
    },
    password:{
        type:String,
        required:true,
        minlength:[6, `Password must be atleast 6 character long.`],
        select:false,               
    },
    socketId:{
        type:String,
    },
    status:{
        type:String,
        enum:["active","inactive"],
        default:"inactive",
    },
    vehicle:{
       color:{
            type:String,
            required:true,
            minlength:[3, `Color must be atleast 3 characters long.`],
       },
       plate:{
            type:String,
            required:true,
            minlength:[3, `Plate must be atleast 3 characters long.`],
       },
       capacity:{
            type:Number,
            required:true,
            min:[1, `Capacity must be atleast 1.`],
       },
       vehicleType:{
            type:String,
            required:true,
            enum:["car","motorcycle","auto"],
       },
       location:{
            latitude:{
                type:Number,
            },
            longitude:{
                type:Number,
            }
       }
    } 
})

captainSchema.methods.generateAuthToken=function(res){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:"7d"});
    // we use cookie to store our token on browser
    res.cookie("jwt",token,{
        maxAge:7*24*60*60*1000,             // mili seconds
        httpOnly:true,                      // prevent xss cross site scripting attacks
        secure:process.env.NODE_ENV!=="development", 
    });
    return token;
}

captainSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password);
}

captainSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,10);
}

const captainModel=mongoose.model("captain",captainSchema);

export default captainModel;