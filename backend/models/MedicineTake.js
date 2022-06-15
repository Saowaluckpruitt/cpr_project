module.exports = (sequelize, DataTypes) => {
  const MedicineTake = sequelize.define("MedicineTake", {
    dose: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  MedicineTake.associate = (models) => {
    MedicineTake.belongsTo(models.MedicineDocs, {
      foreignKey: {
        name: "MedicineDocId",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
    MedicineTake.belongsTo(models.CprCycle, {
      foreignKey: {
        name: "CprCycleId",
        allowNull: true,
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  };
  return MedicineTake;
};
