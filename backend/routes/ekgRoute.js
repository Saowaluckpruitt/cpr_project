const express = require("express");

const router = express.Router();
const ekgController = require("../controllers/ekgController");

router.get("/");
router.post("/", ekgController.createEkg);
router.patch("/:ekgId", ekgController.updateEkg);
router.delete("/:ekgId", ekgController.deleteEkg);

module.exports = router;
