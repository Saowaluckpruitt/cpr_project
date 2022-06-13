module.exports = (sequelize, DataTypes) => {
  const CLine = sequelize.define("CLine", {
    number: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    mark: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false,
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
