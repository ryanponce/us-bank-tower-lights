const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lightSchema = new Schema({
  colors: [String],
  purpose: String,
  year: Number,
  month: Number,
  day: Number
});

const Light = mongoose.model("Light", lightSchema);

module.exports = Light