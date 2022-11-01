const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ModelEvent extends Model {
    static associate(models) {
      // define association here
      ModelEvent.belongsToMany(models.orienteds, { through: models.oriented_event });
      ModelEvent.belongsTo(models.counselors, {
        foreignKey: "counselorId",
        targetKey: "id",
      });

     
    }
  }
  ModelEvent.init(
    {
      name: {
        type: DataTypes.STRING,
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
        type: DataTypes.DATEONLY,
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
        type: DataTypes.TIME,
        allowNull: false,
        validate: {
          // Validaciones de la base de datos
          notNull: {
            msg: "Debe ingresar horario al evento",
          },
        },
      },
      duration: {
        type: DataTypes.TIME,
        allowNull: false,
        validate: {
          // Validaciones de la base de datos
          notNull: {
            msg: "Debe ingresar tiempo de duración",
          },
        },
      },
      description: {
        type: DataTypes.TEXT,
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
    },
    {
      sequelize,
      modelName: "events",
      timestamps: true,
      paranoid: true,
    }
  );
  return ModelEvent;
};
