const express = require("express");
const router = express.Router();
const passport = require("../passport");

router.get("/logout", (req, res) => {
  req.logout();
  req.session = null;
  res.redirect("http://localhost:3000");
});

router.post("/signup", (req, res, next) => {
  //passport cb
  passport.authenticate("local-signup", function (error, user, info) {
    if (error) {
      return res.status(500).json({
        message: error || "Ooops something happened!",
      });
    }

    //Persistent Login
    req.logIn(user, function (error) {
      if (error) {
        return res.status(500).json({
          message: error || "Ooops something happened!",
        });
      }
      user.isAuthenticated = true;
      return res.json(user);
    });
  })(req, res, next);
});

router.post("/signin", (req, res, next) => {
  //passport cb
  passport.authenticate("local-signin", function (error, user, info) {
    if (error) {
      console.log(error);
      return res.status(500).json({
        message: error || "Internal server error ",
      });
    }

    //Persistent Login
    req.logIn(user, function (error) {
      if (error) {
        console.log(error);

        return res.status(500).json({
          message: error || "Ooops something happened!",
        });
      }

      user.isAuthenticated = true;
      return res.json(user);
    });
  })(req, res, next);
});

module.exports = router;
