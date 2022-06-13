const { EtTube } = require("../models");
const createError = require("../utils/createError");

//create
exports.createEtTube = async (req, res, next) => {
  try {
    const { number, mark, time } = req.body;
    const etTube = await EtTube.create({
      number,
      mark,
      time,
    });
    res.status(201).json({ etTube });
  } catch (err) {
    next(err);
  }
};

//update by id sent to params ,detail want to update sent to body
exports.updateEtTube = async (req, res, next) => {
  try {
    const { number, mark, time } = req.body;
    const { etTubeId } = req.params;
    const etTube = await EtTube.findOne({ where: { id: etTubeId } });
    if (!etTube) {
      createError("C-line not found", 404);
    }
    bodyUpdate = { number, mark, time };
    await etTube.update(bodyUpdate);
    res.json({ etTube });
  } catch (err) {
    next(err);
  }
};

exports.deleteEtTube = async (req, res, next) => {
  try {
    const { etTubeId } = req.params;
    const etTube = await EtTube.findOne({ where: { id: etTubeId } });
    if (!etTube) {
      createError("comment not found", 404);
    }

    await etTube.destroy();
    res.status(204).json();
  } catch (err) {
    next(err);
  }
};
