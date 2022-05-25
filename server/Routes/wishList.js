const exp = require('express')
const router = exp.Router()
const foodItems =  require('../Models/foodItems')

router.post('/addFoodItem', async(req,res)=>{
    const foodItem = new foodItems(req.body)
    const isSave = await foodItem.save()

    if(isSave){
        res.send({message:"saved"})
    }
    else{
        res.send({message:"Not saved"})
    }
})

router.get('/getFoodItems',async(req,res)=>{
    const foodItemsList = await foodItems.find()
    res.send(foodItemsList)
})

router.get('/getFoodItem/:id',async(req,res)=>{
    const id = req.params.id
    const foodItem = await foodItems.find({_id:id})
    console.log(foodItem)
    res.send(foodItem)
})

module.exports = router
