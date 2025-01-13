import mongoose from "mongoose";

const blackListTokenSchema=new mongoose.Schema({
    token:{
        type:String,
        required:true,
        unique:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires:168,    // 7 days in hours      --> this is called ttl (time to live)
    }
})

const blackListTokenModel=mongoose.model("blackListToken",blackListTokenSchema);

export default blackListTokenModel;




// we create this collection because we want to store the token of the user 
// who logout from the application then we find if their token exist here
// then we delete that document from userModel and then we delete the token from here