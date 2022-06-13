module.exports = (sequelize, DataTypes) => {
  const MedicineDocs = sequelize.define("MedicineDocs", {
    name: {
      type: DataTypes.STRING,

      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    medicinePic: {
      type: DataTypes.STRING,
      allowNull: true,
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
  MedicineDocs.associate = (models) => {
    MedicineDocs.hasMany(models.MedicineTake, {
      foreignKey: {
        name: "MedicineDocId",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  };
  return MedicineDocs;
};
