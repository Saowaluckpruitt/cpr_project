module.exports = (sequelize, DataTypes) => {
  const CLine = sequelize.define("CLine", {
    number: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    mark: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });
  CLine.associate = (models) => {
    CLine.belongsTo(models.CprCycle, {
      foreignKey: {
        name: "CprCycleId",
        allowNull: true,
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  };
  return CLine;
};
