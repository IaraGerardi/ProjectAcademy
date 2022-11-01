const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ModelNews extends Model {
    static associate() {
      // define association here
    }
  }
  ModelNews.init(
    {
      titulo: {
        type: DataTypes.STRING,
        allowNull: {
          // No permite que el campo sea "null"
          args: false,
          msg: "El campo no puede estar vacío",
        },
      },

      content: {
        type: DataTypes.STRING,
        allowNull: {
          // No permite que el campo sea "null"
          args: false,
          msg: "El campo no puede estar vacío",
        },
      },

      link: {
        type: DataTypes.STRING,
        allowNull: {
          // No permite que el campo sea "null"
          args: false,
          msg: "El campo no puede estar vacío",
        },
      },
    },
    {
      sequelize,
      modelName: "news",
      timestamps: false,
    }
  );
  return ModelNews;
};
