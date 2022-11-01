const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ModelAdmin extends Model {
    static associate() {
      // define association here
    }
  }
  ModelAdmin.init(
    {
      user: {
        type: DataTypes.STRING,
        allowNull: {
          // No permite que el campo sea "null"
          args: false,
          msg: "El campo no puede estar vacío",
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: {
          // No permite que el campo sea "null"
          args: false,
          msg: "El campo no puede estar vacío",
        },
      },
      name: {
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: "Debe ser un correo valido",
          },
        },
      },
      phone: {
        type: DataTypes.STRING(50),
      },
      linkedin: {
        type: DataTypes.STRING(50),
      },
      avatar: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "admins",
      timestamps: false,
      defaultScope: {
        attributes: { exclude: ["password"] },
      },
      scopes: {
        withPassword: {
          attributes: {},
        },
      },
    }
  );
  return ModelAdmin;
};
