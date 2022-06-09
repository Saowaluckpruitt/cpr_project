"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("MedicineTake ", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      dose: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      time: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("MedicineTake");
  },
};
