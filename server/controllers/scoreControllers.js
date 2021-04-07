const Score = require("../models/highScore");

const lvl1_score = (req, res) => {
	Score.find({level: 1})
		.sort("time")
		.exec((err, data) => {
			if (err) {
				console.log(err);
			} else {
				res.send(data);
			}
		});
};

const lvl2_score = (req, res) => {
	Score.find({level: 2})
		.sort("time")
		.exec((err, data) => {
			if (err) {
				console.log(err);
			} else {
				res.send(data);
			}
		});
};

const lvl3_score = (req, res) => {
	Score.find({level: 3})
		.sort("time")
		.exec((err, data) => {
			if (err) {
				console.log(err);
			} else {
				res.send(data);
			}
		});
};

const new_score = (req, res) => {
	const score = new Score(req.body);
	score
		.save()
		.then(result => res.redirect("https://daniel-ulises.github.io/whereswaldo/#/leaderboards"))
		.catch(error => console.log(error));
};

module.exports = {
	lvl1_score,
	lvl2_score,
	lvl3_score,
	new_score,
};
