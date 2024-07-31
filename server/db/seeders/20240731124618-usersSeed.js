'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
       login: 'John Doe',
       email: 'John',
       password: '123'
      }], {});

  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.bulkDelete('Users', null, {});
  
  }
};
