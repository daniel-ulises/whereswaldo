const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
