const router = require("express").Router();
const Score = require("../models/highScore");

router.post("/", (req, res) => {
	const score = new Score(req.body);
	score
		.save()
		.then(result => res.redirect("https://daniel-ulises.github.io/whereswaldo/#/leaderboards"))
		.catch(error => console.log(error));
});

module.exports = router;
