const Monarch = require("../models/Monarch");

module.exports = {
  index: (req, res) => {
    Monarch.find({})
      .populate("kingdom")
      .then(monarchs => {
        res.json(monarchs);
      });
  }
};
