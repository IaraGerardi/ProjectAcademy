const { oriented_event } = require("../seed");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("oriented_event", oriented_event, {});
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete("oriented_event", null, {});
  },
};
