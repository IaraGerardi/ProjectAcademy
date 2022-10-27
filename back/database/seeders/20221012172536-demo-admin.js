const { admin } = require("../seed");

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("admins", admin, {});
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete("admins", null, {});
  },
};
