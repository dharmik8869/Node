const express=require("express")
const app=express()
const db=require("./config/db")
const U_routes = require("./Routes/userR")
app.set("view engine","ejs")
app.use(express.urlencoded())
const passport=require("passport")
const session=require("express-session")
const LocalAuth = require("./Middleware/localAuth")
const B_routes = require("./Routes/blogR")

app.use(session({secret:"keyboard cat",resave:true,saveUninitialized:true}))
LocalAuth(passport)
app.use(passport.initialize());
app.use(passport.session());

app.use("/user",U_routes)
app.use("/blog",B_routes)

app.listen(3005,()=>{
    console.log("server listen")
})