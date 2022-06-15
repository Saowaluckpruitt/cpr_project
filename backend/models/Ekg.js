module.exports = (sequelize, DataTypes) => {
  const Ekg = sequelize.define("Ekg", {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    charge: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });
  Ekg.associate = (models) => {
    Ekg.belongsTo(models.CprCycle, {
      foreignKey: {
        name: "CprCycleId",
        allowNull: true,
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  };
  return Ekg;
};
