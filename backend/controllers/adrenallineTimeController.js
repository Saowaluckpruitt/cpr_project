const { AdrenalineTime } = require("../models");
const createError = require("../utils/createError");

//create
exports.createAdrenalineTime = async (req, res, next) => {
  console.log("adrenaline");
  try {
    const { startTime, stopTime, cprCycleId } = req.body;

    const adrenalineTime = await AdrenalineTime.create({
      startTime,
      stopTime,
      CprCycleId: cprCycleId,
    });
    res.status(201).json({ adrenalineTime });
  } catch (err) {
    next(err);
  }
};

//update by id sent to params ,detail want to update sent to body
exports.updateAdrenalineTime = async (req, res, next) => {
  try {
    const { startTime, stopTime } = req.body;
    const { adrenalineId } = req.params;
    const adrenalineTime = await AdrenalineTime.findOne({
      where: { id: adrenalineId },
    });
    if (!adrenalineTime) {
      createError("medicineDoc not found", 400);
    }

    bodyUpdate = { startTime, stopTime };

    await adrenalineTime.update(bodyUpdate);
    res.json({ adrenalineTime });
  } catch (err) {
    next(err);
  }
};

exports.deleteAdrenalineTime = async (req, res, next) => {
  try {
    const { adrenalineId } = req.params;
    const adrenaline = await AdrenalineTime.findOne({
      where: { id: adrenalineId },
    });
    if (!adrenaline) {
      createError("comment not found", 404);
    }

    await adrenaline.destroy();
    res.status(204).json();
  } catch (err) {
    next(err);
  }
};
