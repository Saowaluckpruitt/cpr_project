module.exports = (sequelize, DataTypes) => {
  const EtTube = sequelize.define("EtTube", {
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
  EtTube.associate = (models) => {
    EtTube.belongsTo(models.CprCycle, {
      foreignKey: {
        name: "CprCycleId",
        allowNull: false,
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  };
  return EtTube;
};
