const express = require("express");

const router = express.Router();
const medicineTakeController = require("../controllers/medicineTakeController");

router.post("/", medicineTakeController.createMedicineTake);
router.patch("/:medicineTakeId", medicineTakeController.updateMedicineTake);
router.delete("/:medicineTakeId", medicineTakeController.deleteMedicineTake);

module.exports = router;
