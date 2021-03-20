const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imgCoords = new Schema({
	id: String,
	coordsX: {
		min: Number,
		max: Number,
	},
	coordsY: {
		min: Number,
		max: Number,
	},
});

const Coords = mongoose.model("coords", imgCoords);

module.exports = Coords;
