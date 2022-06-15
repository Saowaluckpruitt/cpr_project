module.exports = (sequelize, DataTypes) => {
  const AdrenalineTime = sequelize.define("AdrenalineTime", {
    startTime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    stopTime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });
  AdrenalineTime.associate = (models) => {
    AdrenalineTime.belongsTo(models.CprCycle, {
      foreignKey: {
        name: "CprCycleId",
        allowNull: true,
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  };
  return AdrenalineTime;
};
