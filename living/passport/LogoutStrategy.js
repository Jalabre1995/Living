const Strategy = require("passport-local").Strategy;
const User = require("../models/user");

//const bcrypt = require("bcryptjs");
//const salt = bcrypt.genSaltSync(10);

const logoutStrategy = new Strategy({ usernameField: "email" }, function (
  email,
  password,
  done
) {
  User.findOne({ email })
    .lean()
    .exec((err, user) => {
      if (err) {
        return done(err, null);
      }
      if (!user) {
        return done("No user found ", null);
      }
      return done(null, user);
    });
});

module.exports = logoutStrategy;
