const express = require("express");

const router = express.Router();
const cprCycleController = require("../controllers/cprCycleCoontroller");

router.get("/");
router.post("/", cprCycleController.createCprCycle);
router.patch("/:cprCycleId", cprCycleController.updateCprCycle);

router.delete("/:cprCycleId", cprCycleController.deleteCprCycle);

module.exports = router;
