const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating a new Schema to save players' scores
const Highscore = new Schema(
	{
		name: String,
		time: Number,
		level: Number,
	},
	{timestamps: true}
);

const Score = mongoose.model("score", Highscore);

module.exports = Score;
