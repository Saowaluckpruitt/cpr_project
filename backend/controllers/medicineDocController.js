const { MedicineDocs } = require("../models");
const createError = require("../utils/createError");

//create
exports.createMedicinedoc = async (req, res, next) => {
  try {
    const { name, medicinePic, detail, howToUse } = req.body;
    if (!req.user.admin) {
      createError("you have no permission", 403);
    }
    const medicineDoc = await MedicineDocs.create({
      name,
      medicinePic,
      detail,
      howToUse,
    });
    res.status(201).json({ medicineDoc });
  } catch (err) {
    next(err);
  }
};

//update by id sent to params ,detail want to update sent to body
exports.updateMedicineDoc = async (req, res, next) => {
  try {
    const { name, medicinePic, detail, howToUse } = req.body;
    const { medicineId } = req.params;
    const medicineDoc = await MedicineDocs.findOne({
      where: { id: medicineId },
    });
    if (!medicineDoc) {
      createError("medicineDoc not found", 404);
    }
    if (!req.user.admin) {
      createError("you have no permission", 403);
    }

    bodyUpdate = { name, medicinePic, detail, howToUse };

    await medicineDoc.update(bodyUpdate);
    res.json({ medicineDoc });
  } catch (err) {
    next(err);
  }
};

exports.deletemedicineDoc = async (req, res, next) => {
  try {
    const { medicineId } = req.params;
    const medicineDoc = await MedicineDocs.findOne({
      where: { id: medicineId },
    });
    if (!medicineDoc) {
      createError("comment not found", 404);
    }
    if (!req.user.admin) {
      createError("you have no permission", 403);
    }
    await medicineDoc.destroy();
    res.status(204).json();
  } catch (err) {
    next(err);
  }
};
