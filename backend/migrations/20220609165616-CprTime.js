"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("CprTime ", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      startTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      stopTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      checkPulseTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("CprTime");
  },
};
