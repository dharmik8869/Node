const express = require("express");
const router = express.Router();
const passport=require("passport")
const { Register, Login, GetUser, local } = require("../Controller/UserController");

// UI Route — Register Page
router.get("/register", (req, res) => {
    res.render("register");
});

// UI Route — Login Page
router.get("/login", (req, res) => {
    res.render("login");
});

// API Routes
router.post("/register", Register);
router.post("/login", Login);
router.get("/all", GetUser);
router.post("/local", passport.authenticate("local"),local);


module.exports = router;