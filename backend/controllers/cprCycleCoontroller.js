const { CprCycle } = require("../models");
const createError = require("../utils/createError");

//create
exports.createCprCycle = async (req, res, next) => {
  console.log("haha");
  try {
    const {
      temperature,
      pulse,
      respiratoryRate,
      bloodPressure,
      cprStart,
      cprEnd,
      ROSC,
      userId,
    } = req.body;
    const cprCycle = await CprCycle.create({
      temperature,
      pulse,
      respiratoryRate,
      bloodPressure,
      cprStart,
      cprEnd,
      ROSC,
      userId,
    });
    res.status(201).json({ cprCycle });
  } catch (err) {
    next(err);
  }
};

//update by id sent to params ,detail want to update sent to body
exports.updateCprCycle = async (req, res, next) => {
  try {
    const {
      temperature,
      pulse,
      respiratoryRate,
      bloodPressure,
      cprStart,
      cprEnd,
      ROSC,
      userId,
    } = req.body;
    const { cprCycleId } = req.params;
    const cprCycle = await CprCycle.findOne({ where: { id: cprCycleId } });
    if (!cprCycle) {
      createError("Cpr cycle not found", 404);
    }

    bodyUpdate = {
      temperature,
      pulse,
      respiratoryRate,
      bloodPressure,
      cprStart,
      cprEnd,
      ROSC,
      userId,
    };

    await cprCycle.update(bodyUpdate);
    res.json({ cprCycle });
  } catch (err) {
    next(err);
  }
};

exports.deleteCprCycle = async (req, res, next) => {
  try {
    const { cprCycleId } = req.params;
    const cprCycle = await CprCycle.findOne({ where: { id: cprCycleId } });
    if (!cprCycle) {
      createError("cpr cycle not found", 404);
    }

    await cprCycle.destroy();
    res.status(204).json();
  } catch (err) {
    next(err);
  }
};
