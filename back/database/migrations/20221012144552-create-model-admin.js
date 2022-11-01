/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Admins", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user: {
        type: Sequelize.STRING,
        allowNull: {
          // No permite que el campo sea "null"
          args: false,
          msg: "El campo no puede estar vacío",
        },
      },
      password: {
        type: Sequelize.STRING,
        allowNull: {
          // No permite que el campo sea "null"
          args: false,
          msg: "El campo no puede estar vacío",
        },
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
      phone: {
        type: Sequelize.STRING(50),
      },
      linkedin: {
        type: Sequelize.STRING(50),
      },
      avatar: {
        type: Sequelize.STRING,
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
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("Admins");
  },
};
