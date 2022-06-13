const express = require("express");

const router = express.Router();
const cprTimeController = require("../controllers/cprTimeController");

router.get("/");
router.post("/", cprTimeController.createCprTime);
router.patch("/:cprTimeId", cprTimeController.updateCprTime);

module.exports = router;
