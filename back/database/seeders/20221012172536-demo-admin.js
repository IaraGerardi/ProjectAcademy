'use strict';

const { admin } = require('./seed');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('admins', admin, {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('admins', null, {});
  }
};