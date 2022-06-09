module.exports = (sequelize, DataTypes) => {
  const AdrenalineTime = sequelize.define("AdrenalineTime", {
    startTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    stopTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
  AdrenalineTime.associate = (models) => {
    AdrenalineTime.belongsTo(models.CprCycle, {
      foreignKey: {
        name: "CprCycleId",
        allowNull: false,
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  };
  return AdrenalineTime;
};
