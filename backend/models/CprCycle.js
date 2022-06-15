module.exports = (sequelize, DataTypes) => {
  const CprCycle = sequelize.define("CprCycle", {
    temperature: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0.0,
    },
    pulse: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    respiratoryRate: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    bloodPressure: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
    },
    cprStart: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    cprEnd: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    ROSC: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
    },
  });

  // associate
  CprCycle.associate = (models) => {
    CprCycle.hasMany(models.CprTime, {
      foreignKey: {
        name: "CprCycleId",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
    CprCycle.hasMany(models.IvFluid, {
      foreignKey: {
        name: "CprCycleId",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
    CprCycle.hasMany(models.MedicineTake, {
      foreignKey: {
        name: "CprCycleId",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
    CprCycle.hasMany(models.AdrenalineTime, {
      foreignKey: {
        name: "CprCycleId",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
    CprCycle.hasMany(models.Ekg, {
      foreignKey: {
        name: "CprCycleId",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });

    CprCycle.hasOne(models.EtTube, {
      foreignKey: {
        name: "CprCycleId",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });

    CprCycle.hasOne(models.CLine, {
      foreignKey: {
        name: "CprCycleId",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
    CprCycle.belongsTo(models.User);
  };
  return CprCycle;
};
