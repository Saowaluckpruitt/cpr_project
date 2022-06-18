const express = require("express");

const router = express.Router();

const medicineDocController = require("../controllers/medicineDocController");

const authMiddleware = require("../middlewares/authenticate");

router.get("/", medicineDocController.listMedicineDoc);
router.post("/", authMiddleware, medicineDocController.createMedicinedoc);
router.patch(
  "/:medicineDocId",
  authMiddleware,
  medicineDocController.updateMedicineDoc
);
router.delete(
  "/:medicineDocId",
  authMiddleware,
  medicineDocController.deletemedicineDoc
);

module.exports = router;
