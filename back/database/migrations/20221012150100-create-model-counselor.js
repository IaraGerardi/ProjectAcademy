/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Counselors", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: {
          // No permite que el campo sea "null"
          args: false,
          msg: "El campo no puede estar vacío",
        },

        validate: {
          // Validaciones de la base de datos
          isAlpha: {
            // isAlpha solo deja usar letras
            args: true,
            msg: "Solo debe contener letras",
          },
          len: {
            // len establece el minimo y maximo de caracteres
            args: [2, 100],
            msg: "Debe contener minimo 2 caracteres",
          },
        },
      },

      lastname: {
        type: Sequelize.STRING,
        allowNull: {
          // No permite que el campo sea "null"
          args: false,
          msg: "El campo no puede estar vacío",
        },

        validate: {
          // Validaciones de la base de datos
          isAlpha: {
            // isAlpha solo deja usar letras
            args: true,
            msg: "Solo debe contener letras",
          },
          len: {
            // len establece el minimo y maximo de caracteres
            args: [2, 100],
            msg: "Debe contener minimo 2 caracteres",
          },
        },
      },

      email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: "Debe ser un correo valido",
          },
        },
      },
      age: {
        type: Sequelize.DATE,
      },
      avatar: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("Counselors");
  },
};
