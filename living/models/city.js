const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema({
  city: { type: String, required: true },
  Rent: { type: String, required: true },
  synopsis: String,
  Income: { type: String, required: true }
});

const City = mongoose.model("City", citySchema);

module.exports = City;