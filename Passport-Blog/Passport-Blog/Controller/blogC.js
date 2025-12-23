const blogData = require("../Model/blogM")


const PostBlog=async(req,res)=>{
    const data=await blogData.create(req.body)
    res.redirect("/blog")
}

const GetBlog=async(req,res)=>{
    const data=await blogData.find({})
    res.render("blog",{data})
}

const BlogDelete=async(req,res)=>{
   const data=await blogData.findByIdAndDelete(req.query.id)
   res.redirect("/blog")
}

const BlogEdit=async(req,res)=>{
    const data=await blogData.findById(req.query.id)
    res.render("edit",{data})
}

const BlogUpdate=async(req,res)=>{
    const data=await blogData.findByIdAndUpdate(req.body.id,req.body)
    res.redirect("/blog")
}

module.exports={PostBlog,GetBlog,BlogDelete,BlogEdit,BlogUpdate}