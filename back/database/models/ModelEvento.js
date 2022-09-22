const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db.js');

class ModelEvento extends Model { }

ModelEvento.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Debe ingresar un nombre al evento'
            },
            len: {
                args: [2,200],
                msg: 'Comprueba el nombre que desea ingresar para el evento'
            }
        }
    },

    /* ORIENTADOR */

    /* ORIENTADOS */

    date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Debe ingresar un nombre al evento'
            }}
    },
    schedule: {
        type: DataTypes.TIME,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Debe ingresar un nombre al evento'
            }}
    },
    duration: {
        type: DataTypes.TIME,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Debe ingresar un nombre al evento'
            }}
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
            max: {
                args: [500],
                msg: 'Descripción maxima de 500 caracteres'
            }
        }
    }
})

module.exports = ModelEvento;