import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.route.js";
import cookieParser from "cookie-parser";


const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());




app.get("/",(req,res)=>{
    res.send("hello");
});
app.use("/users",userRoutes);



export default app;