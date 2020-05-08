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
const path = require("path");

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactcitylist"
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("dev"));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(
  cookieSession({
    // maxAge: 24 * 60 * 60 * 100,
    name: "session",
    keys: ["key1", "key2"],
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter);
app.use("/authentication", usersRouter);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;
