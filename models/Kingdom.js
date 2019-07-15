const mongoose = require("../db/connection");

const kingdomSchema = new mongoose.Schema({
  title: String,
  extract: String
});

const Kingdom = mongoose.model("Kingdom", kingdomSchema);

module.exports = Kingdom;
