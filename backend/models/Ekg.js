module.exports = (sequelize, DataTypes) => {
  const Ekg = sequelize.define("Ekg", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    charge: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
  Ekg.associate = (models) => {
    Ekg.belongsTo(models.CprCycle, {
      foreignKey: {
        name: "CprCycleId",
        allowNull: false,
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  };
  return Ekg;
};
