const express = require("express");
const router = express.Router();
const Score = require('../models/Score')

router.post("/", async (req, res) => {
  try {
    const score = new Score(req.body);
    await score.save();
    res.status(201).json(score);
  } catch (error) {
    res.status(500).json({ error: "Error creating score" });
  }
});

router.get("/", async (req, res) => {
  try {
    const scores = await Score.find();
    res.status(200).json({ winner: "Team 1", matches: scores });
  } catch (error) {
    res.status(500).json({ error: "Error fetching scores" });
  }
});

module.exports = router;
