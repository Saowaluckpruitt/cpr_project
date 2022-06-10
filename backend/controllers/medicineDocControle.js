const { MedicineDoc } = require("../models/MedicineDoc");
const createError = require("../utils/createError");

//create
exports.createMedicinedoc = async (req, res, next) => {
  try {
    const { name, medicinePic, detail, howTouse } = req.body;
    const medicineDoc = await MedicineDoc.create({
      name,
      medicinePic,
      detail,
      howToUse,
    });
    res.status(201).json({ MedicineDoc });
  } catch (err) {
    next(err);
  }
};

//update by id sent to params ,detail want to update sent to body
exports.updateMedicineDoc = async (req, res, next) => {
  try {
    const { name, medicinePic, detail, howTouse } = req.body;
    const { id } = req.params;
    const medicineDoc = await MedicineDoc.findOne({ where: { id } });
    if (!medicineDoc) {
      createError("medicineDoc not found", 400);
    }

    medicineDooc.name === name &&
      medicineDoc.medicinePic === medicinePic &&
      medicineDoc.detail === detail &&
      medicineDoc.howTouse === howTouse;
    await medicineDoc.save();
    res.json({ medicineDoc });
  } catch (err) {
    next(err);
  }
};
