/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("events", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false, // No permite que el campo sea "null"
        validate: {
          // Validaciones de la base de datos
          notNull: {
            msg: "Debe ingresar un nombre al evento",
          },
          len: {
            args: [2, 200],
            msg: "Comprueba el nombre que desea ingresar para el evento",
          },
        },
      },

      date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        validate: {
          // Validaciones de la base de datos
          notNull: {
            msg: "Debe ingresar fecha al evento",
          },
          isDate: {
            args: true,
            msg: "Ingrese fecha",
          }, // isDate solo acepta fechas
        },
      },
      time: {
        type: Sequelize.TIME,
        allowNull: false,
        validate: {
          // Validaciones de la base de datos
          notNull: {
            msg: "Debe ingresar horario al evento",
          },
        },
      },
      duration: {
        type: Sequelize.TIME,
        allowNull: false,
        validate: {
          // Validaciones de la base de datos
          notNull: {
            msg: "Debe ingresar tiempo de duración",
          },
        },
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true, // Permite que el campo sea "null"
        validate: {
          // Validaciones de la base de datos
          len: {
            // len establece el minimo y maximo de caracteres
            args: [0, 500],
            msg: "Descripción maxima de 500 caracteres",
          },
        },
      },
      counselorId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Counselors",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("events");
  },
};
