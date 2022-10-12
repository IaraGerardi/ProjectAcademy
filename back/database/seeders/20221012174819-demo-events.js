'use strict';

const { events } = require('./seed');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('events', events, {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('events', null, {});
  }
};