"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("CprCycle ", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
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
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("CprCycle");
  },
};
