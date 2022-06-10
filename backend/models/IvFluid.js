module.exports = (sequelize, DataTypes) => {
  const IvFluid = sequelize.define("IvFluid", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    maintained: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    loaded: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    dose: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
  IvFluid.associate = (models) => {
    IvFluid.belongsTo(models.CprCycle, {
      foreignKey: {
        name: "CprCycleId",
        allowNull: false,
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  };
  return IvFluid;
};
