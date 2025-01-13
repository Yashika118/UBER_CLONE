import captainModel from "../models/captain.model.js";

// used to create captain 
export const createCaptain=async({firstname,lastname,email,password,color,plate,capacity,vehicleType})=>{
    // lastname is optional
    if(!firstname || !email || !password || !color || !plate || !capacity || !vehicleType){
        throw new Error("All fields are required");
    }
    const captain=new captainModel({
        fullname:{
            firstname,
            lastname
        },
        email,
        password,
        vehicle:{
            color,
            plate,
            capacity,
            vehicleType,
        },
    })

    return captain;
}