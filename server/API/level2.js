const router = require("express").Router();
const Coords = require("../models/coords");

router.get("/", (req, res) => {
	Coords.findOne({id: "level2"}, (err, data) => {
		if (err) {
			console.log(err);
		} else {
			res.send(data);
		}
	});
});

module.exports = router;
