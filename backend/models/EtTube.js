module.exports = (sequelize, DataTypes) => {
  const EtTube = sequelize.define("EtTube", {
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
  EtTube.associate = (models) => {
    EtTube.belongsTo(models.CprCycle, {
      foreignKey: {
        name: "CprCycleId",
        allowNull: true,
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  };
  return EtTube;
};
