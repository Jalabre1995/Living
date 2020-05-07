const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
//const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const app = express();
const passport = require("./passport");
const PORT = process.env.PORT || 3001;

// Define middleware here
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactcitylist"
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view

//app.use(cookieParser());

//app.use("/authentication", userRoutes);

app.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2"],
    resave: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter);
app.use("/authentication", usersRouter);
// Connect to the Mongo DB

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;
