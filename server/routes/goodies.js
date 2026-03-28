const express = require("express");
const router = express.Router();
const goodiesController = require("../controllers/goodiesController");

//Routes:
router.get("/", goodiesController.getAll);
router.post("/", goodiesController.createGoodie);
router.get("/:id", goodiesController.getGoodie);
router.put("/:id", goodiesController.updateGoodie);
router.delete("/:id", goodiesController.deleteGoodie);

module.exports = router;
