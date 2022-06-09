module.exports = (sequelize, DataTypes) => {
  const CprTime = sequelize.define("CprTime", {
    startTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    stopTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    checkPulseTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
  CprTime.associate = (models) => {
    CprTime.belongsTo(models.CprCycle, {
      foreignKey: {
        name: "CprCycleId",
        allowNull: false,
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  };
  return CprTime;
};
