import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


// user schema

const userSchema=new mongoose.Schema({
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
   },
   password:{
        type:String,
        required:true,
        minlength:[6, `Password must be atleast 6 character long.`],
        select:false,               // jb bhi hum user pe query lgate h toh hume password nhi milega
   },
   socketId:{
        type:String,
   }
})


// user schema pe hum methods use krenge

userSchema.methods.generateAuthToken=function(res){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:"7d"});
    // we use cookie to store our token on browser
    res.cookie("jwt",token,{
        maxAge:7*24*60*60*1000,             // mili seconds
        httpOnly:true,                      // prevent xss cross site scripting attacks
        secure:process.env.NODE_ENV!=="development", 
    });
    return token;
}

userSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password);
}

userSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,10);
}


// user model
const userModel=mongoose.model('user',userSchema);

export default userModel;