'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'testtables', //need to pluralize, even though the model is called 'testtable'
      'newColumn',
      {
        type: Sequelize.STRING
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
              'testtables', 'newColumn'); //'table', 'column to remove
              //need to pluralize, even though the model is called 'testtable'
  }
};
