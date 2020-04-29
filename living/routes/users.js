const express = require("express");
const router = express.Router();
const passport = require("../passport");

router.post("/signup", (req, res, next) => {
  passport.authenticate("local-signup", function (error, user, info) {
    if (error) {
      return res.status(500).json({
        message: "Ooops",
        error: error.message || "Inter server error ",
      });
    }

    return res.json({
      user,
    });
  })(req, res, next);
});

router.post("/signin", function (req, res, next) {
  res.send("respond ");
});

module.exports = router;
