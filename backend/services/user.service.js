import userModel from "../models/user.model.js";

// used to create user 
export const createUser=async({firstname,lastname,email,password})=>{
    // lastname is optional
    if(!firstname || !email || !password){
        throw new Error("All fields are required");
    }
    const user=new userModel({
        fullname:{
            firstname,
            lastname
        },
        email,
        password
    })

    return user;
}