module.exports = (sequelize, DataTypes) => {
  const CprCycle = sequelize.define("CprCycle", {
    temperature: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0,
    },
    pulse: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    respiratoryRate: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    bloodPressure: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    cprStart: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    cprEnd: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    ROSC: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
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
  };
  return CprCycle;
};
