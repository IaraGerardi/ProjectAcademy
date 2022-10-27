/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("oriented_event", {
      OrientedId: {
        type: Sequelize.INTEGER,
        references: {
          model: "orienteds",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      EventId: {
        type: Sequelize.INTEGER,
        references: {
          model: "events",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("oriented_event");
  },
};
