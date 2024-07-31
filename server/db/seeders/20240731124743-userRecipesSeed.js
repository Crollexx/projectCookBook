'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('UserRecipes', [{
      userId:1,
      recipeId:1
     }], {});
  },

  async down (queryInterface, Sequelize) {
 
     await queryInterface.bulkDelete('UserRecipes', null, {});
 
  }
};
