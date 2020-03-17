'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('categories', [{
        name: 'Javascript',
        createdAt: new Date(),
        updatedAt: new Date()
        
      },
      {
        name: 'Node',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'CSS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'HTML',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bootstrap4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'APIs',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'React',
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
