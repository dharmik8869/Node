 
// const express = require("express")

// const app = express()

// app.set("view engine","ejs")


// app.use(express.urlencoded())
// app.use(express.static(__dirname+"/public"))
// var student = [
//     {
//         "id": 1,
//         "name": "sunaina"
//     },

//     {
//         "id": 2,
//         "name": "jyoti"
//     }

// ]

// app.get("/", (req, res) => {
//     // res.send("Home page")
//     res.render("index")
// })

// app.post("/insertData", (req, res) => {
//     const { name } = req.body
//     const id = student.length + 1;
//     student.push({id,name})

//     res.redirect("/")

// })

// app.get("/delete",(req,res)=>{
//     student = student.filter(el=>el.id !== +req.query.id);
//     res.redirect("/")
// })

// app.get("/edit", (req, res) => {
//     const id = req.query.id
//     const ans = student.filter((el, i) => {
//         return el.id == id
//     })
//     res.render("edit", { editData: ans[0] })
// })

// app.post("/editData", (req, res) => {
//     const { id, name } = req.body
//     student.forEach(el => {
//         if (el.id == id) {
//             el.name = name
//         }
//     })

//     res.redirect("/")
// })


// app.listen(7890, () => {
//     console.log("server listen")
// })