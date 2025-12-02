const express = require("express")

const app = express("")

app.use(express.json())


const db = require('./config/db')
const usermodel = require("./model/usermodel")

app.post("/insertData",async(req,res)=>{
    const data=await usermodel.create(req.body)
    res.send(data)
})

app.get("/",async(req,res)=>{
    const user1=await usermodel.find({})
    res.send(user1)
})

app.delete("/:id",async(req,res)=>{
    const id=req.params.id
    const data = await usermodel.findByIdAndDelete(id)
    res.send("success")
})

app.patch("/:id",async(req,res)=>{
    const id=req.params.id
    const data = await usermodel.findByIdAndUpdate(id,req.body)
    res.send(data)
})

app.listen(7878,()=>{
    console.log("Server Listen")
})