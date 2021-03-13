const mongoose = require("./connection");
const Schema = mongoose.Schema;

const kingdomSchema = new Schema({
  title: String,
  extract: String
});

let kingdomModel = mongoose.model("Kingdom", kingdomSchema)
module.exports = kingdomModel