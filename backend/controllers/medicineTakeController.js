const { MedicineTake } = require("../models");
const createError = require("../utils/createError");

//create
exports.createMedicineTake = async (req, res, next) => {
  console.log("medicine");
  try {
    const { dose, medicineDocId, cprCycleId } = req.body;
    const medicineTake = await MedicineTake.create({
      dose,

      MedicineDocId: medicineDocId,
      CprCycleId: cprCycleId,
    });
    res.status(201).json({ medicineTake });
  } catch (err) {
    next(err);
  }
};

//update by id sent to params ,detail want to update sent to body
exports.updateMedicineTake = async (req, res, next) => {
  try {
    const { dose, time, medicineDocId, cprCycleId } = req.body;
    const { medicineTakeId } = req.params;
    const medicineTake = await MedicineTake.findOne({
      where: { id: medicineTakeId },
    });
    if (!medicineTake) {
      createError("Medicinetake not found", 404);
    }

    bodyUpdate = { dose, time, medicineDocId, cprCycleId };

    await medicineTake.update(bodyUpdate);
    res.json({ medicineTake });
  } catch (err) {
    next(err);
  }
};

exports.deleteMedicineTake = async (req, res, next) => {
  try {
    const { medicineTakeId } = req.params;
    const medicineTake = await MedicineTake.findOne({
      where: { id: medicineTakeId },
    });
    if (!medicineTake) {
      createError("medicineTake not found", 404);
    }

    await medicineTake.destroy();
    res.status(204).json();
  } catch (err) {
    next(err);
  }
};
