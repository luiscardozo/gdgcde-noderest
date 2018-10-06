'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('hotel', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      direccion: {
        type: Sequelize.STRING
      },
      latitud: {
        type: Sequelize.DECIMAL
      },
      longitud: {
        type: Sequelize.DECIMAL
      },
      imagenUrl: {
        allowNull: true,
        field: 'imagen_url',
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP)'),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP)'),
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('hotel');
  }
};