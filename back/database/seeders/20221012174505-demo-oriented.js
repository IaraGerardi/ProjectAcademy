'use strict';

const { oriented } = require("./seed");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('orienteds', oriented, {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('orienteds', null, {});
  }
};