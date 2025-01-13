import express from 'express';
import { body } from 'express-validator';
import { getCaptainProfile, loginCaptain, logoutCaptain, registerCaptain } from '../controllers/captain.controller.js';
import { authCaptain } from '../middleware/auth.middleware.js';

const router=express.Router();

router.post("/register",[
    body('email').isEmail().withMessage("Invalid email"),  
    body("fullname.firstname").isLength({min:3}).withMessage("First name must be atleast 3 character long."),
    body("password").isLength({min:6}).withMessage("Password must be atleast 6 character long."),
    body("vehicle.color").isLength({min:3}).withMessage("Color must be atleast 3 characters long"),
    body("vehicle.plate").isLength({min:3}).withMessage("Plate must be atleast 3 characters long"),
    body("vehicle.capacity").isInt({min:1}).withMessage("Capacity must be atleast 1"),
    body("vehicle.vehicleType").isIn(["car","motorcycle","auto"]).withMessage("Invalid vehicle type"),
],registerCaptain);

router.post("/login",[
    body('email').isEmail().withMessage("Invalid email"),  
    body("password").isLength({min:6}).withMessage("Password must be atleast 6 character long."),
],loginCaptain);


router.get("/profile",authCaptain,getCaptainProfile);

router.get("/logout",authCaptain,logoutCaptain);



export default router;