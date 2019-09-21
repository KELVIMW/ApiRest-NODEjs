'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Drones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customer_image: {
        type: Sequelize.STRING
      },
      customer_name: {
        type: Sequelize.STRING
      },
      customer_address: {
        type: Sequelize.STRING
      },
      battery: {
        type: Sequelize.INTEGER
      },
      max_speed: {
        type: Sequelize.REAL
      },
      average_speed: {
        type: Sequelize.REAL
      },
      status: {
        type: Sequelize.STRING
      },
      current_fly: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Drones');
  }
};