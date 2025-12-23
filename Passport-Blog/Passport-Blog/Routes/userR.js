const express=require("express")
const { PostUser, GetUser, login, local } = require("../Controller/userC")
const passport = require("passport")
const U_routes=express.Router()

U_routes.post("/register",PostUser)
U_routes.get("/",GetUser)
// U_routes.post("/login",login)
U_routes.get("/login",(req,res)=>{
    res.render("login")
})
U_routes.post("/login",passport.authenticate("local",{successRedirect:"/blog",failureRedirect:"/user"}),local)

module.exports=U_routes