const mongoose=require('mongoose')
const usermodel=mongoose.Schema({
    name:String,
    email:{type:String,unique:true},
    password:String,
})

module.exports=mongoose.model('User',usermodel)