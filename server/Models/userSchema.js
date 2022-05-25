const mongoose=require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//schema is structure of the document. Here userSchema is instance of Schema class where every time a new dpcument is created
const userSchema = new mongoose.Schema(
    {
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        tokens:[{
            token:{
                type:String,
                required:true
            }
        }]
    }
)

userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12)
    }
    next();
})

userSchema.methods.generateToken = async function(){
    const token = jwt.sign({_id:this._id}, process.env.SECRET_KEY)
    this.tokens = [...this.tokens,{token}]
    await this.save()
    return token
}

//Here the document name is created as users so no need to add s at end og USER
//USER is a collection and we are defining the structure of document which should be in USER collection as userSchema
const User=mongoose.model("USER",userSchema);
module.exports=User