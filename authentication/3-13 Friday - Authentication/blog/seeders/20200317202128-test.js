'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('dctests', [
        {
        title: 'Digital Crafts',
        isValid: true,
        count: 1,
        author_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
