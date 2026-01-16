const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/auth')

const db=mongoose.connection

db.on("connection",(err,data)=>{
   if(data){
    console.log("database connect")
   }
}) 
