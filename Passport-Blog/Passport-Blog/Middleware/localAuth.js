const userData = require("../Model/userM");

const LocalStrategy = require("passport-local").Strategy;
const LocalAuth = (passport) => {
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      const user = await userData.findOne({ username: username });
      if (!user) {
        return done(null, false, { message: "username not found" });
      }

      if (user.password != password) {
        return done(null, false, { message: "passord invalid" });
      }

      return done(null, user);
    })
  );
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
      const user = await userData.findById(id);
      done(null, user);
  });
};

module.exports = LocalAuth;
