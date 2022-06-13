const express = require("express");

const router = express.Router();
const etTubeController = require("../controllers/etTubeController");

router.get("/");
router.post("/", etTubeController.createEtTube);
router.patch("/:etTubeId", etTubeController.updateEtTube);
router.delete("/:etTubeId", etTubeController.deleteEtTube);

module.exports = router;
