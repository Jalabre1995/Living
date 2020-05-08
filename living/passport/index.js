const passport = require("passport");
const User = require("../models/user");

passport.serializeUser(function (user, done) {
  done(null, user._id);
});

passport.deserializeUser(function (id, done) {
  User.findOne({ id })
    .lean()
    .exec((error, user) => {
      if (error) {
        return done(err, null);
      }
      return done(null, user);
    });
});

//import all the strategies
const SignUpStrategy = require("./SignUpStrategy");
const LoginStrategy = require("./LoginStrategy");
//const GoogleStrategy = require("./GoogleStrategy");

// Configure our strategies
passport.use("local-signup", SignUpStrategy);
passport.use("local-signin", LoginStrategy);

module.exports = passport;
