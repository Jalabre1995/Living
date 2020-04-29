const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  /*name: {
        type: String,
        unique: true,
      },*/
  UserLogin: {
    username: String,
    password: String,
    email: String,
    bio: String,
  },
  notes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Note",
    },
  ],
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
