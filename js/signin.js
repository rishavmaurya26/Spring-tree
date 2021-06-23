const mongoose=require("mongoose")
const userschema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        require:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})
// first letter of variablr must be capital as it is class
const Info=new mongoose.model("Sign_in",userschema)
module.exports =Info
