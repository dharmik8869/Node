const express = require("express")
const db = require("./config/db")
const U_router = require("./Routes/userRouter")
const app = express()
const user = require("./model/usermodel")
const B_router = require("./Routes/bookRoutes")

app.use(express.json())
app.use('/Book',B_router)

app.use("/user",U_router)

app.listen(7500,()=>{
    console.log("server listen")
}) 