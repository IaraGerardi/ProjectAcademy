'use strict';

const { news } = require('./seed');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('news', news, {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('news', null, {});
  }
};