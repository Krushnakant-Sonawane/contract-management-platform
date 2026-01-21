const express = require("express");
const router = express.Router();
const controller = require("../controllers/blueprintController");

router.post("/", controller.createBlueprint);
router.get("/", controller.getBlueprints);
router.get("/:id", controller.getBlueprintById);

module.exports = router;
