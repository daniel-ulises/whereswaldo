const router = require("express").Router();
const scoreControllers = require("../controllers/scoreControllers");

router.post("/waldo/new_score", scoreControllers.new_score);
router.get("/waldo/lvl1_score", scoreControllers.lvl1_score);
router.get("/waldo/lvl2_score", scoreControllers.lvl2_score);
router.get("/waldo/lvl3_score", scoreControllers.lvl3_score);

module.exports = router;
