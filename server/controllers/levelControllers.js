const Coords = require("../models/coords");

const lvl1_coords = (req, res) => {
	Coords.findOne({id: "level1"}, (err, data) => {
		if (err) {
			console.log(err);
		} else {
			res.send(data);
		}
	});
};

const lvl2_coords = (req, res) => {
	Coords.findOne({id: "level2"}, (err, data) => {
		if (err) {
			console.log(err);
		} else {
			res.send(data);
		}
	});
};

const lvl3_coords = (req, res) => {
	Coords.findOne({id: "level3"}, (err, data) => {
		if (err) {
			console.log(err);
		} else {
			res.send(data);
		}
	});
};

module.exports = {
	lvl1_coords,
	lvl2_coords,
	lvl3_coords,
};
