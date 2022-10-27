const { counselors } = require("../seed");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("counselors", counselors, {});
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete("counselors", null, {});
  },
};
