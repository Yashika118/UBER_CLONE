import express from "express"
import { body } from "express-validator";
import { getUserProfile, loginUser, registerUser } from "../controllers/user.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router=express.Router();


// register
router.post("/register",[

    // body k andr jo email aaega usko validate krenge ki
    // vo email h ya nhi , agr email nhi h toh message denge "Invalid email"
    // same for others like password , fullname etc.
    body('email').isEmail().withMessage("Invalid email"),  
    body("fullname.firstname").isLength({min:3}).withMessage("First name must be atleast 3 character long."),
    body("password").isLength({min:6}).withMessage("Password must be atleast 6 character long.")

],registerUser);

// here we only checks that condition is true or false but we don't perform any action on them
// actions are performed in regiterUser controller using validationResult


// login
router.post("/login",[
    body('email').isEmail().withMessage("Invalid email"),
    body("password").isLength({min:6}).withMessage("Password must be atleast 6 character long.")
],loginUser);


// profile
router.get("/profile",authMiddleware,getUserProfile);


export default router;