const express = require("express");

const router = express.Router();
const cLineCotroller = require("../controllers/cLineCotroller");

router.get("/");
router.post("/", cLineCotroller.createCLine);
router.patch("/:cLineId", cLineCotroller.updateCLine);
router.delete("/:cLineId", cLineCotroller.deleteCLine);

module.exports = router;
