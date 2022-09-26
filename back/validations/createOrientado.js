const { check, validationResult, body } = require('express-validator');
const { ModelOrientado } = require('../database/associations');
const { validateResult } = require('../helpers/validateHelper');

/* const getAge = value => {
    let today = new Date();
    let birthDate = new Date(value);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
} */

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
            return ModelOrientado.findOne({ where: { email: value } })
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
            return ModelOrientado.findOne({ where: { dni: value } })
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
    (req, res, next) => {
        validateResult(req, res, next)
    }
]


module.exports = validateCreate;


const validationCreate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    next()
}