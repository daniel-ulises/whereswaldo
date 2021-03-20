const router = require("express").Router();
const Score = require("../models/highScore");

router.post("/", (req, res) => {
	const score = new Score({
		name: String,
		time: Number,
	});

	score
		.save()
		.then(result => res.send(result))
		.catch(error => console.log(error));
});

module.exports = router;
