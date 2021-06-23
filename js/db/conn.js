const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/user_signup",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:true
}).then(()=>{
    console.log("connection successful")
}).catch((err)=>{
    console,log("sever error")
})