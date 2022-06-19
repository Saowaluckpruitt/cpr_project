const express = require("express");

const router = express.Router();
const cprCycleController = require("../controllers/cprCycleCoontroller");
const authMiddleware = require("../middlewares/authenticate");

router.get("/", authMiddleware, cprCycleController.listCprCycles);
router.post("/", authMiddleware, cprCycleController.createCprCycle);
router.patch("/:cprCycleId", authMiddleware, cprCycleController.updateCprCycle);

router.delete(
  "/:cprCycleId",
  authMiddleware,
  cprCycleController.deleteCprCycle
);

module.exports = router;
