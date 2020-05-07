const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema({
  city: { type: String, required: true },
  costOfLiving: { type: String, required: true },
  housing: { type: String, required: true},
  safety: { type: String, required: true},
  healthCare: { type: String, required: true},
  education: { type: String, required: true},
  economy: { type: String, required: true},
});

const City = mongoose.model("City", citySchema);

module.exports = City;

