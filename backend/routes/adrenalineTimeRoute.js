const express = require("express");

const router = express.Router();
const adrenalineTimeController = require("../controllers/adrenallineTimeController");

router.get("/");
router.post("/", adrenalineTimeController.createAdrenalineTime);
router.patch(
  "/:adrenalineTimeId",
  adrenalineTimeController.updateAdrenalineTime
);
router.delete(
  "/:adrenalineTimeId",
  adrenalineTimeController.deleteAdrenalineTime
);

module.exports = router;
