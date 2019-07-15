const Monarch = require("../models/Monarch");

module.exports = {
  index: (req, res) => {
    Monarch.find({}).then(monarchs => {
      res.json(monarchs);
    });
  }
};
