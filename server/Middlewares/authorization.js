const jwt = require("jsonwebtoken")
const user = require("../models/userSchema")
const cookieParser = require('cookie-parser')

const authorize = async (req,res,next) => {
    console.log("visited middle ware for autho")
   try {
       console.log(req.Cookies.jwtoken)
        const token = req.cookies.jwtoken
        const verifyToken = jwt.verify(token,process.env.SECRET_KEY)  
    
        const rootUser = await user.findOne({ _id:verifyToken._id , "tokens.token":token})  
        if(!rootUser){  
            throw new Error('User not found')  
        }  

        req.token = token
        req.rootUser = rootUser
        req.userID = rootUser._id   
        next();
   }
   catch(err){
       console.log(err)
   }
}

module.exports = authorize