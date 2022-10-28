const { check } = require("express-validator");
const { validateResult } = require("../helpers/validateHelper");

const regExpTime = /^([0-2][0-9]):[0-5][0-9]$/;
const regExpDuration = /^([0][0-8]):([0-5][0-9]):[0-5][0-9]$/;

const eventValidator = [
  /* ------Inpunt nameEvent------- */
  check("nameEvent")
    .notEmpty()
    .withMessage("Ingrese nombre al evento")
    .isLength({ min: 2, max: 500 })
    .withMessage("Verifique la longitud del nombre"),
  /* ------Inpunt dateEvent------- */
  check("dateEvent")
    .notEmpty()
    .withMessage("Ingrese fecha al evento")
    .isDate()
    .withMessage("Verifique el formato de la fecha")
    .custom((value) => {
      const todayString = new Date().toLocaleDateString("en-US"); // Dato del día pasado a string* NOTA no considera la hora
      const valueString = new Date(`${value} `).toLocaleDateString("en-US");
      const todayDate = new Date(todayString);
      const valueDate = new Date(valueString);
      return valueDate >= todayDate;
    })
    .withMessage("Verifique la fecha ingresada"),
  /* ------Inpunt timeEvent------- */
  check("timeEvent")
    .notEmpty()
    .withMessage("Ingrese horario del evento")
    .matches(regExpTime)
    .withMessage("Ingrese horas correctas")
    .custom((value) => {
      return value < "23:59"
    })
    .withMessage("Revise el horario del evento"),
  /* ------Inpunt durationEvent------- */
  check("durationEvent")
    .notEmpty()
    .withMessage("Ingrese duración del evento")
    .matches(regExpDuration)
    .withMessage("Revise la duración del evento")
    .custom((value) => {
      return value < "08:00:00"
    })
    .withMessage("Revise la duración del evento"),
  /* ------Inpunt OrientadoreId------- */
  check("counselorEvent").notEmpty().withMessage("Ingrese Orientador"),
  /*      .isNumeric().withMessage('Revise datos de orientador') */ // Hacer que el front traiga un numero, no un objeto.
  /* ------Inpunt orientadosEvent------- */
  check("orientedEvent").notEmpty().withMessage("Ingrese orientados"),
  (req, res, next) => {
    validateResult(req, res, next);
    /* Esta accion está en un helper
        cumple la funcion de seguir la lectura
        o tirar error si algo falla */
  },
];

module.exports = { eventValidator };