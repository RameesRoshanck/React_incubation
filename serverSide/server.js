require('dotenv').config();
const Router=require('./Route/router')
const express=require('express')
const connectDB=require('./config/connection')
const cors=require('cors')
var cookieParser = require('cookie-parser')


const app=express() 
app.use(cookieParser()) 
PORT=process.env.PORT

connectDB()

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors())
app.use('/',Router)


app.listen(PORT,()=>{
    console.log('local host running');
})