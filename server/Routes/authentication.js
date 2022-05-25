const exp=require('express')
const User = require('../models/userSchema')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const router=exp.Router()
const authorize = require('../Middlewares/authorization') 

router.get('/',(req,res)=>
{
    res.cookie("shiv","shakti")
    res.json("om namah shivaya")
})

router.post('/register',async(req,res)=>{
   
    console.log(req.body)
    const isUserExist=await User.findOne({email:req.body.email})
    if(isUserExist){ 
        res.status(422).json({message:"User already exists"})
    }
    else{
        const {email, password}=req.body
        const user=new User({email, password})

        const isSave = await user.save()
        if(isSave)
        {
            res.status(201).json({message:"User registered succesfully........."})
        }
        else
        {
            res.status(500).json({message:"Failed to register......"})
        }
    }
});

router.post('/login',async(req,res)=>
{
    const {email,password}=req.body

    const IsExists = await User.findOne({email:email})
    if(!IsExists)
    {
        res.json({message:"Invalid username"})
    }
    else
    {
        const cmp=await bcrypt.compare(password,IsExists.password)
        if(!cmp)
        {
            res.json({message:"Invalid password"})
        }
        else
        {
            let token = await IsExists.generateToken()
            res.cookie("jwtoken",token,{
                expires:new Date(Date.now()+25892000000),
                httpOnly:true
            })

            res.json({message:"User logged successfully",token})
        }
    }
})

router.get('/about',authorize,(req,res)=>{
    console.log("viisted get in backend")
    res.send(req.rootUser)
})

module.exports=router