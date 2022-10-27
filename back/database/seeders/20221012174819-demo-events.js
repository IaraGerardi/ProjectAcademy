const { events } = require("../seed");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("events", events, {});
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete("events", null, {});
  },
};
