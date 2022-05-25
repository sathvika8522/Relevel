const exp = require('express')
const app = exp()
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'}) 

/*---------------------------- MiddleWares--------------------------*/
app.use(exp.json())
app.use(cors())

/*----------------------------- Routing middlewares-----------------*/
app.use(require('./Routes/wishList'))


const dburl = process.env.DBURL
mongoose.connect(dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Successfully connected to backend........");
})
.catch((err) => {
    console.log("Error connecting to mongo.", err);
});

const port = process.env.PORT
app.listen(port,()=>{console.log(`port listening on ${port}..........`)})