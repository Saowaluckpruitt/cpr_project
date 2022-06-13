const { CprTime } = require("../models");
const createError = require("../utils/createError");

//create
exports.createCprTime = async (req, res, next) => {
  try {
    const { startTime, stopTime, checkPulseTime, CprCycleId } = req.body;
    const cprTime = await CprTime.create({
      startTime,
      stopTime,
      checkPulseTime,
      CprCycleId,
    });
    res.status(201).json({ cprTime });
  } catch (err) {
    next(err);
  }
};

//update by id sent to params ,detail want to update sent to body
exports.updateCprTime = async (req, res, next) => {
  try {
    const { startTime, stopTime, checkPulseTime } = req.body;
    const { cprTimeId } = req.params;
    const cprTime = await CprTime.findOne({ where: { id: cprTimeId } });
    if (!cprTime) {
      createError("Cpr time  not found", 404);
    }

    bodypdate = { startTime, stopTime, checkPulseTime };

    await cprTime.update(bodypdate);
    res.json({ cprTime });
  } catch (err) {
    next(err);
  }
};
