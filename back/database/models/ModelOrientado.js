const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db.js');

class ModelOrientado extends Model { }

ModelOrientado.init({
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
    phone:{
        type: DataTypes.STRING(50),
    },
    program:{
        type: DataTypes.STRING,

    },
    photoProfile:{
        type: DataTypes.STRING
    },
    dni:{
        type: DataTypes.STRING(50),
        validate: {
            isInt: {
                args: true,
                msg: 'Debe ser en numeros'
            },
        }
    },
    age:{
        type: DataTypes.DATE,
    },
    school:{
        type: DataTypes.STRING,
    },
    address:{
        type: DataTypes.STRING,
    },
    //Porque se acerca a la institucion
    why:{
        type: DataTypes.STRING,
    }
}, {
    sequelize, 
    modelName: "Orientado",
    timestamps: false
});

module.exports = ModelOrientado;
