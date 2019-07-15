const Kingdom = require("../models/Kingdom");

module.exports = {
  index: (req, res) => {
    Kingdom.find({}).then(kingdoms => {
      res.json(kingdoms);
    });
  }
};
