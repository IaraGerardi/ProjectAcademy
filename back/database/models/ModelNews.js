'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ModelNews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ModelNews.init({
    titulo: {
      type: DataTypes.STRING,
      allowNull: { //No permite que el campo sea "null"
        args: false,
        msg: 'El campo no puede estar vacío'
      }
    },

    content: {
      type: DataTypes.STRING,
      allowNull: { //No permite que el campo sea "null"
        args: false,
        msg: 'El campo no puede estar vacío'
      }
    },

    link: {
      type: DataTypes.STRING,
      allowNull: { //No permite que el campo sea "null"
        args: false,
        msg: 'El campo no puede estar vacío'
      }
    }
  }, {
    sequelize,
    modelName: "News",
    timestamps: false
  });
  return ModelNews;
};