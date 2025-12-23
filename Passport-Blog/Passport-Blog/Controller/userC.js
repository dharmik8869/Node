const userData = require("../Model/userM")

const PostUser=async(req,res)=>{
    const data=await userData.create(req.body)
    res.redirect("/user")
}

const GetUser=async(req,res)=>{
    const data=await userData.find({})
    res.render("register",{data})
}

const local=(req,res)=>{
    return res.render("success")
}

const LoginPage=(req,res)=>{
    res.render("login")
}

module.exports={PostUser,GetUser,LoginPage,local}