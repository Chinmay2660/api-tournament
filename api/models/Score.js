const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
  team1: {
    type: String,
    required: true,
  },
  team2: {
    type: String,
    required: true,
  },
  match: {
    type: String,
  },
  game: {
    type: String,
  },
  team1Players: {
    type: [[String]],
  },
  team2Players: {
    type: [[String]],
  },
  winner: {
    type: String,
  },
});

module.exports = mongoose.model("Score", scoreSchema, "TournamentDB");
