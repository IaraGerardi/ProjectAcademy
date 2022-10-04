const { check, body } = require('express-validator');
const { ModelEvento } = require('../database/associations');
const { validateResult } = require('../helpers/validateHelper');

const regExpTime = new RegExp(/^([0-2][0-9]):[0-5][0-9]$/)
const regExpDuration = new RegExp(/^([0][0-8]):[0-5][0-9]$/)

const eventValidator = [
    /* ------Inpunt nameEvent------- */
    check('nameEvent')
        .notEmpty().withMessage('Ingrese nombre al evento')
        .isLength({ min: 2, max: 500 }).withMessage('Verifique la longitud del nombre')
    ,
    /* ------Inpunt dateEvent------- */
    check('dateEvent')
        .notEmpty().withMessage('Ingrese fecha al evento')
        .isDate().withMessage('Verifique el formato de la fecha')
        .custom(value => {
            const today = (new Date()).toLocaleDateString(); //Dato del día pasado a string* NOTA no considera la hora
            const dataDate = (new Date(`${value} `)).toLocaleDateString(); //Dato ingresado a string.* NOTA /* Hay un espacio despues del "value" ingresado asi usa la misma zona horaria*/
            if (Date.parse(dataDate) < Date.parse(today)) { //Parseamos los datos a numeros y comparamos. Si es menor algun día anterior al de hoy y retorna error
                return false;
            } else {
                return true
            }
        }).withMessage('Verifique la fecha ingresada')
    ,
    /* ------Inpunt timeEvent------- */
    check('timeEvent')
        .notEmpty().withMessage('Ingrese horario del evento')
        .matches(regExpTime).withMessage('Ingrese "horas" correctas')
        .custom(value => {
            if (value > '23:59') {
                return false
            } else {
                return true
            }
        }).withMessage('Revise la duración del evento')
    ,
    /* ------Inpunt durationEvent------- */
    check('durationEvent')
        .notEmpty().withMessage('Ingrese duración del evento')
        .matches(regExpDuration).withMessage('Revise la duración del evento')
        .custom(value => {
            if (value > '08:00') {
                return false
            } else {
                return true
            }
        }).withMessage('Revise la duración del evento')
    ,

    check('OrientadoreId')
        .notEmpty().withMessage('Ingrese Orientador')
        .isNumeric().withMessage('Revise datos de orientador')
    ,
    check('orientadosEvent')
        .notEmpty().withMessage('Ingrese orientados')
    ,


    (req, res, next) => {
        validateResult(req, res, next);
        /* Esta accion está en un helper
        cumple la funcion de seguir la lectura
        o tirar error si algo falla */
    }
]

module.exports = { eventValidator }