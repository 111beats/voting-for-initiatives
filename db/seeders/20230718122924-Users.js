/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Users", [
      {
        fio: "Иванов Иван Иванович",
        email: "ivanov_ivan@mail.ru",
        adress: " Москва, ул. Ленина, д. 1",
        password: "123",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fio: "Петрова Екатерина Сергеевна",
        email: "petrova_ekaterina@gmail.com",
        adress: "Санкт-Петербург, пр. Невский, д. 10",
        password: "456",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fio: "Смирнов Алексей Владимирович",
        email: "smirnov_alexey@yandex.ru",
        adress: "Екатеринбург, ул. Гоголя, д. 5",
        password: "543",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fio: "Козлова Мария Андреевна",
        email: "kozlova_maria@mail.ru",
        adress: "Новосибирск, пр. Калинина, д. 20",
        password: "789",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
