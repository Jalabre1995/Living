const Strategy = require("passport-local").Strategy;
const User = require("../models/user");

const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

const localStrategy = new Strategy({ usernameField: "email" }, function (
  username,
  password,
  done
) {
  User.findOne({ email })
    .lean()
    .exec((err, user) => {
      if (err) {
        return done(err, null);
      }
      if (user) {
        return done("user already exits", null);
      }
      const isPasswordValid = bcrypt.compareSync(password, user.password);
      if (!isPasswordValid) {
        return done("Email or Password not valid ", null);
      }
      return done(null, user);
    });
});

module.exports = localStrategy;
