const express = require("express");
const router = express.Router();
const kingdomController = require("../controllers/kingdom");

router.get("/", kingdomController.index);

module.exports = router;
