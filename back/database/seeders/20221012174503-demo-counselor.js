'use strict';

const { counselors } = require('./seed');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('counselors', counselors, {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('counselors', null, {});
  }
};