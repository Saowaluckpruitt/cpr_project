const { CprCycle } = require("../models");
const createError = require("../utils/createError");
const {
  MedicineTake,
  MedicineDocs,
  AdrenalineTime,
  CLine,
  CprTime,
  Ekg,
  EtTube,
  IvFluid,
} = require("../models");

exports.listCprCycles = async (req, res, next) => {
  const cprCycles = await CprCycle.findAll({
    where: { UserId: req.user.id },
    limit: 5,
    order: [["id", "DESC"]],
    include: [
      {
        model: MedicineTake,
        include: [MedicineDocs],
      },
      AdrenalineTime,
      CLine,
      CprTime,
      Ekg,
      EtTube,
      IvFluid,
    ],
  });
  res.status(200).json({ cprCycles });
};

//create
exports.createCprCycle = async (req, res, next) => {
  console.log(req.user);
  try {
    const {
      temperature,
      pulse,
      respiratoryRate,
      bloodPressure,
      cprStart,
      cprEnd,
      ROSC,
    } = req.body;
    const cprCycle = await CprCycle.create({
      temperature,
      pulse,
      respiratoryRate,
      bloodPressure,
      cprStart,
      cprEnd,
      ROSC,
      UserId: req.user.id,
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
      UserId,
    } = req.body;
    const { cprCycleId } = req.params;
    const cprCycle = await CprCycle.findOne({
      where: { id: cprCycleId, UserId: req.user.id },
    });
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
      UserId,
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
    const cprCycle = await CprCycle.findOne({
      where: { id: cprCycleId, UserId: req.user.id },
    });
    if (!cprCycle) {
      createError("cpr cycle not found", 404);
    }

    await cprCycle.destroy();
    res.status(204).json();
  } catch (err) {
    next(err);
  }
};
