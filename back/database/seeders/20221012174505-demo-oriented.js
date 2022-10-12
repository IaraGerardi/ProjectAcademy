'use strict';

const { oriented } = require("./seed");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('oriented', oriented, {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('oriented', null, {});
  }
};