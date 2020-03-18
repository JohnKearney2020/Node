'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.renameTable('testtables', 'renamedTestTable');

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.renameTable('renamedTestTable', 'testtables');

  }
};
