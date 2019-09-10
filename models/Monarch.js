const mongoose = require("../db/connection");

const monarchSchema = new mongoose.Schema(
  {
    name: String,
    house: String,
    start: Number,
    end: Number,
    endReason: String,
    kingdom: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Kingdom"
    }
  },
  { collection: "userinfo" }
);

const Monarch = mongoose.model("Monarch", monarchSchema);

module.exports = Monarch;
