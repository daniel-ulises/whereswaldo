const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Highscore = new Schema(
	{
		name: String,
		time: Number,
	},
	{timestamps: true}
);

const Score = mongoose.model("Score", Highscore);

module.exports = Score;
