const { CLine } = require("../models");
const createError = require("../utils/createError");

//create
exports.createCLine = async (req, res, next) => {
  try {
    const { number, mark, time, CprCycleId } = req.body;
    const cLine = await CLine.create({
      number,
      mark,
      time,
      CprCycleId,
    });
    res.status(201).json({ cLine });
  } catch (err) {
    next(err);
  }
};

//update by id sent to params ,detail want to update sent to body
exports.updateCLine = async (req, res, next) => {
  try {
    const { number, mark, time } = req.body;
    const { cLineId } = req.params;
    const cLine = await CLine.findOne({ where: { id: cLineId } });
    if (!cLine) {
      createError("C-line not found", 404);
    }

    bodyUpdate = { number, mark, time };

    await cLine.update(bodyUpdate);
    res.json({ cLine });
  } catch (err) {
    next(err);
  }
};

exports.deleteCLine = async (req, res, next) => {
  try {
    const { cLineId } = req.params;
    const cLine = await CLine.findOne({ where: { id: cLineId } });
    if (!cLine) {
      createError("comment not found", 404);
    }

    await cLine.destroy();
    res.status(204).json();
  } catch (err) {
    next(err);
  }
};
