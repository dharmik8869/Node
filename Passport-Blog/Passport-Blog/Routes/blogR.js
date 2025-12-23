const express=require("express")
const { PostBlog, GetBlog, BlogDelete, BlogEdit, BlogUpdate } = require("../Controller/blogC")
const isAuth = require("../Middleware/blogAuth")
const B_routes=express.Router()

B_routes.post("/blogData",isAuth,PostBlog)
B_routes.get("/",isAuth,GetBlog)
B_routes.get("/delete",isAuth,BlogDelete)
B_routes.get("/edit",isAuth,BlogEdit)
B_routes.post("/editData",isAuth,BlogUpdate)

module.exports=B_routes