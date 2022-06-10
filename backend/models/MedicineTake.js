module.exports = (sequelize, DataTypes) => {
  const MedicineTake = sequelize.define("MedicineTake", {
    dose: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  MedicineTake.associate = (models) => {
    MedicineTake.belongsTo(models.MedicineDoc, {
      foreignKey: {
        name: "MedicineDocId",
        allowNull: false,
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
    MedicineTake.belongsTo(models.CprCycle, {
      foreignKey: {
        name: "CprCycleId",
        allowNull: false,
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  };
  return MedicineTake;
};
