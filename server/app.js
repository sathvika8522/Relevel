const exp=require('express')
const app=exp()
const mongoose=require('mongoose')
const User=require('./models/userSchema')
const cookieParser = require('cookie-parser')
const dotenv=require('dotenv')
dotenv.config({path:'./config.env'});

/*------------To convert json object to understandable form-------------*/
app.use(exp.json())
app.use(cookieParser())
//-----------Routes--------------
app.use(require('./routes/authentication'))

//----------connecting to database--------
const dburl=process.env.DATABASEURL;
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

//------------Assinging port number---------
const port=process.env.portNumber
app.listen(port,()=>{console.log(`Server is running on port ${port}................`)})