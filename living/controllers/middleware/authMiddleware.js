const auth = {
  // checks if the user is logged in, if not, redirect to the
  // unauthorized route
  isLoggedIn: (req, res, next) => {
    if (req.isAuthenticated()) {
      console.log("user authenticated");
      next();
    } else {
      console.log("user not authenticated");
      res.redirect("/api/users/unauthorized");
    }
  },
};

module.exports = auth;
