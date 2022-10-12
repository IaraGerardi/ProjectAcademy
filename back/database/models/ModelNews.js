const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class ModelNews extends Model { }

ModelNews.init({
    titulo:{
        type: DataTypes.STRING,
        allowNull: { //No permite que el campo sea "null"
            args: false,
            msg: 'El campo no puede estar vacío'
        }
    },

    content:{
        type: DataTypes.STRING,
        allowNull: { //No permite que el campo sea "null"
            args: false,
            msg: 'El campo no puede estar vacío'
        }
    },

    link:{
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

module.exports = ModelNews;