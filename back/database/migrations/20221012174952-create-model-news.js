/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("news", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: {
          // No permite que el campo sea "null"
          args: false,
          msg: "El campo no puede estar vacío",
        },
      },

      content: {
        type: Sequelize.STRING,
        allowNull: {
          // No permite que el campo sea "null"
          args: false,
          msg: "El campo no puede estar vacío",
        },
      },

      link: {
        type: Sequelize.STRING,
        allowNull: {
          // No permite que el campo sea "null"
          args: false,
          msg: "El campo no puede estar vacío",
        },
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("news");
  },
};
