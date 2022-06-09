"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("EtTube ", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
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
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("EtTube");
  },
};
