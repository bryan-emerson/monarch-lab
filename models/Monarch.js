const mongoose = require("./connection");
const Schema = mongoose.Schema;

const monarchSchema = new Schema({
  name: String,
  house: String,
  start: Number,
  end: Number,
  endReason: String,
  kingdom: String,
});


let monarchModel = mongoose.model("Monarch", monarchSchema)
module.exports = countryModel