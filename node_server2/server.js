require('dotenv').config()
const express=require('express')
const app=express()
const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost/familia',{useNewUrlParser:true})
const db=mongoose.connection
db.on('error',(error)=> console.error(error))
db.once('open',()=>console.log('connected to database'))
app.use(express.json())
const familiaRouter = require("./route/familia")
app.use('/familia',familiaRouter)

app.listen(3000,()=>console.log('server started'))