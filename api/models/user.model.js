import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    
},{timestamps:true} //these information later in our aplication to sort for example to post the users 
);

const User=mongoose.model("User",userSchema)

export default User;
