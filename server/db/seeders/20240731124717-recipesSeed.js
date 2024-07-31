'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Recipes', [{
      photo: 'https://cdn.food.ru/unsigned/fit/750/563/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxNC93UDZWYmIuanBlZw.webp',
      title: 'Кабачки с томатной пастой на зиму',
      ingredients: 'Кабачок - 900 г; Вода - 800 г',
      time: '40'
     }], {});
  },

  async down (queryInterface, Sequelize) {
 
     await queryInterface.bulkDelete('Recipes', null, {});
 
  }
};