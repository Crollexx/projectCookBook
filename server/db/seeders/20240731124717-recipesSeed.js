'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Recipes', [
      {
          photo: "https://cdn.food.ru/unsigned/fit/750/563/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxNy8zRnhtdHQuanBlZw.webp",
          title: "Кабачковые лодочки с рыбой",
          ingredients: "Кабачок - 900 г; Филе белой рыбы - 300 г; Морковь - 90 г; Репчатый лук - 80 г; Твердый сыр - 50 г; Сливочное масло - 40 г;",
          time: "1 час 10 мин"
      },
      {
          photo: "https://cdn.food.ru/unsigned/fit/750/563/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDIyMDMyNy80UEFhb2MucG5n.webp",
          title: "Паста с помидорами и базиликом",
          ingredients: "Паста - 250 г; Помидоры - 400 г; Базилик - 20 г; Чеснок - 2 зубчика; Оливковое масло - 2 ст. ложки; Соль и перец - по вкусу;",
          time: "30 мин"
      },
      {
          photo: "https://cdn.food.ru/unsigned/fit/750/563/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy9yZWNpcGVzLzQzMDI5L2NvdmVycy9TTUdxV20uanBn.webp",
          title: "Куриные грудки в сливочном соусе",
          ingredients: "Куриные грудки - 500 г; Сливки - 200 мл; Чеснок - 2 зубчика; Лук - 1 шт.; Оливковое масло - 2 ст. ложки; Соль и перец - по вкусу;",
          time: "40 мин"
      },
      {
          photo: "https://cdn.food.ru/unsigned/fit/750/563/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDIzMDIxNS9WZTJnUFYuanBlZw.webp",
          title: "Салат Цезарь с курицей",
          ingredients: "Куриное филе - 300 г; Салат романо - 1 пучок; Помидоры черри - 200 г; Пармезан - 50 г; Крутоны - 100 г; Соус Цезарь - 50 мл;",
          time: "20 мин"
      },
      {
          photo: "https://cdn.food.ru/unsigned/fit/750/563/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDIzMTAwMy9qVmo3c0suanBlZw.webp",
          title: "Суп-пюре из тыквы",
          ingredients: "Тыква - 500 г; Лук - 1 шт.; Морковь - 1 шт.; Сливки - 100 мл; Оливковое масло - 1 ст. ложка; Соль и перец - по вкусу;",
          time: "45 мин"
      },
      {
          photo: "https://cdn.food.ru/unsigned/fit/750/563/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDIzMTIyNy94ckE1ZTguanBlZw.webp",
          title: "Омлет с овощами",
          ingredients: "Яйца - 4 шт.; Помидоры - 2 шт.; Перец болгарский - 1 шт.; Лук - 1 шт.; Оливковое масло - 1 ст. ложка; Соль и перец - по вкусу;",
          time: "20 мин"
      },
      {
          photo: "https://cdn.food.ru/unsigned/fit/750/563/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy9yZWNpcGVzLzUzMC9jb3ZlcnMvM2pYNGhTLkpQRw.webp",
          title: "Блины с творогом",
          ingredients: "Мука - 200 г; Молоко - 300 мл; Яйцо - 1 шт.; Творог - 250 г; Сахар - 2 ст. ложки; Соль - 1/2 ч. ложки;",
          time: "1 час"
      },
      {
          photo: "https://cdn.food.ru/unsigned/fit/750/563/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDIyMDIwNS9zMzltVEYuanBlZw.webp",
          title: "Тушеные овощи с курицей",
          ingredients: "Куриное филе - 400 г; Морковь - 2 шт.; Кабачок - 1 шт.; Перец болгарский - 1 шт.; Оливковое масло - 2 ст. ложки; Соль и перец - по вкусу;",
          time: "50 мин"
      },
      {
          photo: "https://cdn.food.ru/unsigned/fit/750/563/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDIzMDIxNS8zR1pCd0cuanBlZw.webp",
          title: "Запеченная рыба с лимоном",
          ingredients: "Филе рыбы - 500 г; Лимон - 1 шт.; Оливковое масло - 2 ст. ложки; Чеснок - 2 зубчика; Соль и перец - по вкусу;",
          time: "35 мин"
      }
     
  
  ], {});
  },

  async down (queryInterface, Sequelize) {
 
     await queryInterface.bulkDelete('Recipes', null, {});
 
  }
};
