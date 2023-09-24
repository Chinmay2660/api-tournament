const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
  team1: String,
  team2: String,
  match: String,
  game: String,
  team1Players: [String],
  team2Players: [String],
  winner: String,
});

module.exports = mongoose.model("Score", scoreSchema);
