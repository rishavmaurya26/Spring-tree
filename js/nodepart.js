
const fs=require("fs")
const hbs=require("hbs")
const express=require("express")
const path=require("path")
const app= express();
const port = process.env.PORT || 8080;
const dir=path.dirname(__dirname)
const pth=path.join(dir,'/Html')
require("./db/conn")
const Info=require("./signin")
const { json }=require("express")
console.log(dir)
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(dir));
app.set("views",pth);
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);
hbs.registerPartials(dir+'/Html/partials' , function (err) {
    // console.log(err)
});

app.get('/',(req,res)=>{
    res.render("Home");
})

app.get('/about',(req,res)=>{
    res.render("aboutus");
})
app.get('/agra',(req,res)=>{
    res.render("agra")
})
app.get('/Agrahtl',(req,res)=>{ 
    res.render("Agrahtl")
})


app.get('/sign_in',(req,res)=>{
    res.render("sign_in")
})
app.post('/sign_in',async(req,res)=>{
    try{
        const userData=new Info({
        firstname:req.body.fname,
        lastname:req.body.lname,
        contact:req.body.contact,
        gender:req.body.gender,
        email:req.body.email,
        password:req.body.password
        })
        const saved=await userData.save()
        res.status(201).render("Home")
    }catch(err){
        res.status(400).send(err);
        console.log(err)
    }
})
app.get('/login',(req,res)=>{
    res.render("login")
})
app.post('/login',async(req,res)=>{
    try{
        const email=req.body.email
        const password=req.body.password
        const dataofuser=await Info.findOne({email:email})
        console.log(dataofuser)
        if(password===dataofuser.password) 
        {
            res.status(201).render("Home")
        }
        else{
            res.send("<h1>invalid mail or password<h1>")
        }
    }
    catch(err){
        res.status(400).send("invalid email or password")
    }
   
})
app.get('/booking',(req,res)=>{
   res.render("Booking")
})

app.listen(port,()=>{
    console.log("server is running")
})
