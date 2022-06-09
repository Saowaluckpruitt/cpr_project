module.exports = (sequelize, DataTypes) => {
  const MedicineDoc = sequelize.define("MedicineDoc", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    medicinePic: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    detail: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    howToUse: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });
  MedicineDoc.associate = (models) => {
    MedicineDoc.hasMany(models.MedicineTake, {
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  };
  return MedicineDoc;
};
