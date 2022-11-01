const { oriented } = require("../seed");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("orienteds", oriented, {});
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete("orienteds", null, {});
  },
};
