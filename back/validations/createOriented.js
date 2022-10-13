const { check, body } = require('express-validator');
const { orienteds: ModelOriented } = require('../database/models/index');
const { validateResult } = require('../helpers/validateHelper');

//Express-Validator para formulario CREAR ORIENTADO
const validateCreate = [
    check('name')//se fija si existe
        .notEmpty().withMessage('El campo nombre está vacío')
        .isLength({ min: 2, max: 250 }).withMessage('Ingrese nombre valido')
        .isAlpha().withMessage('Solo se permiten letras')
    ,
    check('lastname')
        .notEmpty().withMessage('El campo apellido está vacío')
        .isLength({ min: 2, max: 250 }).withMessage('Ingrese apellido valido')
        .isAlpha().withMessage('Solo se permiten letras')
    ,
    check('password')
        .notEmpty().withMessage('El campo password está vacío')
        .isLength({ min: 8 }).withMessage('Aumenta la cantidad de digitos')
    ,
    check('email')
        .notEmpty().withMessage('El campo email está vacío')
        .isEmail().withMessage('Ingrese email valido')
        .custom(async (value) => {
            return ModelOriented.findOne({ where: { email: value } }) //Busca en la base de datos si el Email ya esta ingresado
                .then(email => {
                    if (email) { return Promise.reject('Este email ya está siendo utilizado') }
                })
        })
    ,
    check('phone')
        .notEmpty().withMessage('El campo telefono está vacío')
        .isNumeric().withMessage('Solo se permiten numeros')
        .isLength({ min: 8, max: 50 }).withMessage('Ingrese telefono válido')
    ,
    check('program')
        .notEmpty().withMessage('El campo programa está vacío')
        .not().isNumeric().withMessage('Solo se permiten letras')
        .isLength({ min: 4, max: 50 }).withMessage('Ups, ese programa todavía no lo tenemos')
    ,
    check('dni')
        .notEmpty().withMessage('El campo DNI está vacío')
        .isNumeric().withMessage('Solo se permiten numeros')
        .isLength({ min: 8 }).withMessage('Faltan numeros')
        .custom(async (value) => {
            return ModelOriented.findOne({ where: { dni: value } })
                .then(dni => {
                    if (dni) { return Promise.reject('Este DNI ya está siendo utilizado') }
                })
        })
    ,
    check('age')
        .notEmpty().withMessage('El campo Edad está vacío')
        .not().isAlpha().withMessage('Ups. Verifique los datos ingresados')
        .isLength({ min: 8 }).withMessage('Faltan numeros')
    ,
    check('school')
        .notEmpty().withMessage('El campo escuela está vacío')
    ,
    check('address')
        .notEmpty().withMessage('El campo dirección está vacío')
    ,
    check('why')
        .notEmpty().withMessage('Escriba un breve descripcion de porque se acerca a nosotros')
    ,
    check('photoProfile')//se fija si existe
        .custom((value, { req }) => {
            value = req.file
            if (!value) {
                return false
            }
            console.log('Entro al otro');
            return true
        })
        .withMessage('El campo foto está vacío'), //VER SI ANDA ESTO. VALIDACION DE FOTO
    (req, res, next) => {
        validateResult(req, res, next);
        /* Esta accion está en un helper
        cumple la funcion de seguir la lectura
        o tirar error si algo falla */
    }
]


module.exports = validateCreate;