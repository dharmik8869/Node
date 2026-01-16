
const express=require('express')
const db=require("./config/db")
const authroouter=require("./authrouter/authroouter")
const app=express()
const cors = require("cors")

app.use(express.json())
app.use(cors());


app.use("/",authroouter)
app.listen(9000,()=>{
    console.log('server listen')
})

