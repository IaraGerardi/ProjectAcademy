const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db.js');

class ModelOrientador extends Model { }

ModelOrientador.init({
    name:{
        type: DataTypes.STRING,
        allowNull: { //No permite que el campo sea "null"
            args: false,
            msg: 'El campo no puede estar vacío'
        }, 

        validate: {  //Validaciones de la base de datos
            isAlpha: { //isAlpha solo deja usar letras
                args: true,
                msg: 'Solo debe contener letras'
            },
            len: { //len establece el minimo y maximo de caracteres
                args: [2,100],
                msg: 'Debe contener minimo 2 caracteres'
            }
        }
    },

    lastname:{
        type: DataTypes.STRING,
        allowNull: { //No permite que el campo sea "null"
            args: false,
            msg: 'El campo no puede estar vacío'
        }, 

        validate: {  //Validaciones de la base de datos
            isAlpha: { //isAlpha solo deja usar letras
                args: true,
                msg: 'Solo debe contener letras'
            },
            len: { //len establece el minimo y maximo de caracteres
                args: [2,100],
                msg: 'Debe contener minimo 2 caracteres'
            }
        }
    },

    email:{
        type: DataTypes.STRING,
        validate: {
            isEmail:{
                args: true,
                msg: 'Debe ser un correo valido'
            }
        }
    },
    age:{
        type: DataTypes.DATE,
    }
}, {
    sequelize, 
    modelName: "Orientadores",
    timestamps: false
});

module.exports = ModelOrientador;

/* // the defined model is the class itself
console.log(User === sequelize.models.User); // true */