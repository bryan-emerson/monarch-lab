const express = require("express");
const router = express.Router();

router.use("/", require("./application.js"));
router.use("/api/monarch", require("./monarch.js"));
router.use("/api/kingdom", require("./kingdom.js"));

router.all("*", (req, res) => {
  res.status(400).send();
});

module.exports = router;
