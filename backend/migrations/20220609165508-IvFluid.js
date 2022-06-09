"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("IvFluid ", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      maintained: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      loaded: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      dose: {
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
    return queryInterface.dropTable("IvFluid");
  },
};
