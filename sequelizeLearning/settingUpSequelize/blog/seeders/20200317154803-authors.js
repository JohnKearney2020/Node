'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      //the authors table is static. Once made here it will not be changed regularly.
      return queryInterface.bulkInsert('authors', [{
        name: 'Austin', //first author
        bio: 'Just a smalltown boy.',
        imageURL: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jaye', //2nd author
        bio: 'From a van down by the river.',
        imageURL: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mark', //3rd author
        bio: 'From parts unkown.',
        imageURL: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Alina', //3rd author
        bio: 'From Moscow. Has lived in the US for five years.',
        imageURL: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'John', //3rd author
        bio: 'From Bloomington, Indiana. #FarmBoy.',
        imageURL: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
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
