const passport = require("passport");
//const connection = require("../connection");
const SignUpStrategy = require("./SignUpStrategy");
const LoginStrategy = require("./LoginStrategy");
//const GoogleStrategy = require("./GoogleStrategy");

// Configure our strategies
passport.use("local-signup", SignUpStrategy);
passport.use("local-signin", LoginStrategy);

module.exports = passport;
