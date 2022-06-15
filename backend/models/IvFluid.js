module.exports = (sequelize, DataTypes) => {
  const IvFluid = sequelize.define("IvFluid", {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    maintained: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    loaded: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    dose: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });
  IvFluid.associate = (models) => {
    IvFluid.belongsTo(models.CprCycle, {
      foreignKey: {
        name: "CprCycleId",
        allowNull: true,
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  };
  return IvFluid;
};
