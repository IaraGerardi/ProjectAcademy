/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("orienteds", {
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
            msg: "Debe ingresar el nombre", // mensaje al ser nulo
          },
          isAlpha: {
            // isAlpha solo deja usar letras
            args: true,
            msg: "El campo nombre solo debe contener letras",
          },
          len: {
            // len establece el minimo y maximo de caracteres
            args: [2, 500],
            msg: "Comprueba el nombre que desea ingresar",
          },
        },
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Ingrese contraseña",
          },
          len: {
            // len establece el minimo y maximo de caracteres
            args: [4, 500],
            msg: "Debe haber un minimo de 8 caracteres",
          },
        },
      },

      lastname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          // Validaciones de la base de datos
          notNull: {
            msg: "El campo apellido está vacio",
          },
          len: {
            // len establece el minimo y maximo de caracteres
            args: [2, 100],
            msg: "El apellido debe contener minimo 2 caracteres",
          },
        },
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
          // Esto es para darle un mensaje personalizado. Al final declaramos las columnas unicas
          name: "email",
          msg: "El email ya está siendo utilizado",
        },
        validate: {
          notNull: {
            msg: "El campo email está vacio",
          },
          isEmail: {
            args: true,
            msg: "Debe ser un email válido",
          },
        },
      },

      phone: {
        type: Sequelize.STRING(50),
        allowNull: false,
        validate: {
          // Validaciones de la base de datos
          notNull: {
            msg: "El campo telefono está vacio",
          },
          len: {
            // len establece el minimo y maximo de caracteres
            args: [8, 50],
            msg: "Faltan numeros en el telefono",
          },
        },
      },
      program: {
        type: Sequelize.STRING,
        /* allowNull: false,
        validate: {
            notNull: {
                msg: 'Indique el programa'
            },
        } */
      },
      photoProfile: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Ingrese una foto de perfil",
          },
        },
      },
      dni: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: {
          // Esto es para darle un mensaje personalizado. Al final declaramos las columnas unicas
          name: "dni",
          msg: "El DNI ya está siendo utilizado",
        },
        validate: {
          notNull: {
            msg: "Ingrese D.N.I.",
          },
          isInt: {
            args: true,
            msg: 'Ingrese "numero" de DNI',
          },
        },
      },
      age: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Ingrese edad del orientado",
          },
        },
      },
      school: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Ingrese nombre de la escuela",
          },
        },
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Ingrese direccion del orientado",
          },
        },
      },
      why: {
        // Porque se acerca a la institucion
        type: Sequelize.STRING,
        /* allowNull: false,
        validate: {
            notNull: {
                msg: 'Ingrese motivo por el cual se acercó el orientado'
            },
        } */
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
    await queryInterface.dropTable("orienteds");
  },
};
