module.exports = (sequelize, DataTypes) => {
  const CprTime = sequelize.define("CprTime", {
    startTime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    stopTime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    checkPulseTime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });
  CprTime.associate = (models) => {
    CprTime.belongsTo(models.CprCycle, {
      foreignKey: {
        name: "CprCycleId",
        allowNull: true,
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  };
  return CprTime;
};
