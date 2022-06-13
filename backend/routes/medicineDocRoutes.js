const express = require("express");

const router = express.Router();

const medicineDocController = require("../controllers/medicineDocController");

const authMiddleware = require("../middlewares/authenticate");

router.get("/");
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
