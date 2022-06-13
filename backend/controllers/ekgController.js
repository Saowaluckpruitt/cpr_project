const { Ekg } = require("../models");
const createError = require("../utils/createError");

//create
exports.createEkg = async (req, res, next) => {
  try {
    const { name, charge, time } = req.body;
    const ekg = await Ekg.create({
      name,
      charge,
      time,
    });
    res.status(201).json({ ekg });
  } catch (err) {
    next(err);
  }
};

//update by id sent to params ,detail want to update sent to body
exports.updateEkg = async (req, res, next) => {
  try {
    const { name, charge, time } = req.body;
    const { ekgId } = req.params;
    const ekg = await Ekg.findOne({ where: { id: ekgId } });
    if (!ekg) {
      createError("Ekg not found", 404);
    }
    bodyUpdate = { name, charge, time };

    await ekg.update(bodyUpdate);
    res.json({ ekg });
  } catch (err) {
    next(err);
  }
};

exports.deleteEkg = async (req, res, next) => {
  console.log("eee");
  try {
    const { ekgId } = req.params;
    const ekg = await Ekg.findOne({ where: { id: ekgId } });
    if (!ekg) {
      createError("comment not found", 404);
    }

    await ekg.destroy();
    res.status(204).json();
  } catch (err) {
    next(err);
  }
};
