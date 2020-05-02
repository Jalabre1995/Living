const express = require("express");
const router = express.Router();
const passport = require("../passport");

router.post("/signup", (req, res, next) => {
  console.log(req.body);

  passport.authenticate("local-signup", function (error, user, info) {
    if (error) {
      return res.status(500).json({
        message: error || "Ooops something happened!",
      });
    }

    return res.json(user);
  })(req, res, next);
  console.log(req.body);
});

router.post("/signin", (req, res, next) => {
  passport.authenticate("local-signin", function (error, user, info) {
    if (error) {
      return res.status(500).json({
        message: error || "Internal server error ",
      });
    }

    return res.json(user);
  })(req, res, next);
});

module.exports = router;
