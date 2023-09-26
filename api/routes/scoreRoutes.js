const express = require("express");
const router = express.Router();
const scoreController = require("../controllers/scoreControllers");

router.post("/", scoreController.createScore);
router.get("/", scoreController.getScores);
router.delete("/clearData", scoreController.deleteData)

module.exports = router;
