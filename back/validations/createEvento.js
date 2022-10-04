const { check, body } = require('express-validator');
const { ModelEvento } = require('../database/associations');
const { validateResult } = require('../helpers/validateHelper');

const eventValidator = [
    check('nameEvent')
        .notEmpty().withMessage('Ingrese nombre al evento')
        .isLength({ min: 2, max: 500 }).withMessage('Verifique la longitud del nombre'),
    check('dateEvent')
        .notEmpty().withMessage('Ingrese fecha al evento')
        .isDate().withMessage('Verifique el formato de la fecha')
        .custom(value => {
            const today = new Date()
            const dataDate = new Date(value)
            if(dataDate < today){
                throw new Error ('End date of lab must be valid and after start date')
            }return true;
        }).withMessage('Verifique la fecha ingresada'),
    (req, res, next) => {
        validateResult(req, res, next);
        /* Esta accion está en un helper
        cumple la funcion de seguir la lectura
        o tirar error si algo falla */
    }
]

module.exports = { eventValidator }