const router = require("express").Router();
const Score = require("../models/highScore");

router.get("/", (req, res) => {
	Score.find({level: 1})
		.sort("time")
		.exec((err, data) => {
			if (err) {
				console.log(err);
			} else {
				res.send(data);
			}
		});
});

module.exports = router;
