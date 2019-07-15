const express = require("express");
const router = express.Router();
const monarchController = require("../controllers/monarch");

router.get("/", monarchController.index);

module.exports = router;
