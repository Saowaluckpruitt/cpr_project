const { IvFluid } = require("../models");
const createError = require("../utils/createError");

//create
exports.createIvFluid = async (req, res, next) => {
  try {
    const { name, maintained, loaded, dose, time } = req.body;
    const ivFluid = await IvFluid.create({
      name,
      maintained,
      loaded,
      dose,
      time,
    });
    res.status(201).json({ ivFluid });
  } catch (err) {
    next(err);
  }
};

//update by id sent to params ,detail want to update sent to body
exports.updateIvFluid = async (req, res, next) => {
  console.log(this.updateIvFluid);
  try {
    const { name, maintained, loaded, dose, time } = req.body;
    const { ivFluidId } = req.params;
    const ivfluid = await IvFluid.findOne({ where: { id: ivFluidId } });
    if (!ivfluid) {
      createError("ivfluid not found", 404);
    }

    bodyUpdate = { name, maintained, loaded, dose, time };
    await ivfluid.update(bodyUpdate);
    res.json({ ivfluid });
  } catch (err) {
    next(err);
  }
};

exports.deleteIvFluid = async (req, res, next) => {
  try {
    const { ivFluidId } = req.params;
    const ivFluid = await IvFluid.findOne({ where: { id: ivFluidId } });
    if (!ivFluid) {
      createError("comment not found", 404);
    }

    await ivFluid.destroy();
    res.status(204).json();
  } catch (err) {
    next(err);
  }
};
