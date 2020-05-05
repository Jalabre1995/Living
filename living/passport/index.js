const passport = require("passport");
const User = require("../models/user");

passport.serializeUser(function (user, done) {
  done(null, user.email);
});

passport.deserializeUser(function (id, done) {
  User.findOne({ email })
    .lean()
    .exec((err, user) => {
      done(err, user);
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
