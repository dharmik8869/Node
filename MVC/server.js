const express = require('express');
const db = require("./config/db");
const user = require("./model/usermodel");
const U_router = require("./Routes/userRouter");
const B_router = require('./Routes/BookRoutes');
const M_router = require('./Routes/movieRoutes'); // Fixed typo here
const session = require("express-session");
const passport = require("passport");
const LocalAuth = require('./middleware/LocalAuth');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.set("view engine", "ejs");
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
LocalAuth(passport);
app.use(passport.initialize());
app.use(passport.session());

// Set EJS view engine

app.use('/user', U_router);
app.use('/Book', B_router);
app.use('/Movie', M_router); // Fixed typo here

app.listen(4000, () => {
    console.log("Server is listening on port 4000");
});
