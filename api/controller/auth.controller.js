import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";  
import { errorHandler } from "../utils/error.js";
import jwt  from "jsonwebtoken";

export const signup=async(req,res,next)=>{
    const {username,email,password}=req.body;

    if(!username || !email || !password || username === ""|| email ==="" || password === ""){
       next(errorHandler(400,"All fields are Required"));
       

    }

    const hashedPassword =bcryptjs.hashSync(password,10)
    
   const newUser= new User({
    username,
    email,
    password:hashedPassword,
 })
     try{
        await newUser.save();
        res.json({message:"Signup Successfull"})
     }catch(error){
        next(error)
     }
}

export const signin=async (req,res,next)=>{
   const {email,password}=req.body;
   
   if(!email || !password || email === "" || password === ""){
      next(errorHandler(400,"All fields are Required"));
   }
   try{
      const validUser=await User.findOne({email})
      if(!validUser){
         next(errorHandler(404,"User Not Found"));
      }
      const validPassword=bcryptjs.compareSync(password,validUser.password)
      if(!validPassword){
       return  next(errorHandler(400,"Invalid Password"))
      }

      const token=jwt.sign(
         {
            id:validUser._id,


         },
         process.env.JWT_SECRET_KEY,

      )
      res.status(200).cookie("Access token",token,{
         httpOnly:true
      }).json(validUser);

   }catch(err){
      next(err)
      console.log("error is ", err)
   }
      
}