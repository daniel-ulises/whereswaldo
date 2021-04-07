const router = require("express").Router();
const levelControllers = require("../controllers/levelControllers");

router.get("/waldo/lvl1_coords", levelControllers.lvl1_coords);
router.get("/waldo/lvl2_coords", levelControllers.lvl2_coords);
router.get("/waldo/lvl3_coords", levelControllers.lvl3_coords);

module.exports = router;
