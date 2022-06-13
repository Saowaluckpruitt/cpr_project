const express = require("express");

const router = express.Router();
const ivFluidController = require("../controllers/ivFluidController");

router.get("/");
router.post("/", ivFluidController.createIvFluid);
router.patch("/:ivFluidId", ivFluidController.updateIvFluid);
router.delete("/:ivFluidId", ivFluidController.deleteIvFluid);

module.exports = router;
