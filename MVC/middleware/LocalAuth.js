const usermodel = require("../model/usermodel")

const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;
const localAuth = (passport) => {
    passport.use(new LocalStrategy(async (username, password, done) => {
        const user=await usermodel.findOne({username:username})
        if(!user){
            return done(null, false, { message: 'User Not Found' });
        }
        if(user.password !== password){
            return done(null, false, { message: 'Invalid Password' });
        }
        return done(null, user);
    }))

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        const user = await usermodel.findById(id);
        done(null, user);
    });
}

module.exports = localAuth;