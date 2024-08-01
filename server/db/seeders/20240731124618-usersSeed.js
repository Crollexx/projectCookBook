'use strict';
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
       login: 'John Doe',
       email: 'John@mail.ru',
       password:  bcrypt.hashSync('123', 10)
      }], {});

  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.bulkDelete('Users', null, {});
  
  }
};
