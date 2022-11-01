const { news } = require("../seed");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("news", news, {});
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete("news", null, {});
  },
};
