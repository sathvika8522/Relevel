const mongoose = require('mongoose')

const foodItem = new mongoose.Schema(
    {
        foodName:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        }
    }
)

const foodItems = mongoose.model("FOODITEM",foodItem)
module.exports = foodItems