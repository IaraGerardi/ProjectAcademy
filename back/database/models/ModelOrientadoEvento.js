const { Model } = require('sequelize');
const sequelize = require('../db.js');

class ModelOrientadoEvento extends Model { }

ModelOrientadoEvento.init({

},{
    sequelize,
    freezeTableName: true,
    modelName: 'orientado_evento'
});

module.exports = ModelOrientadoEvento;