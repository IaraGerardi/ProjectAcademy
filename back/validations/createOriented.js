const { check } = require("express-validator");
const { orienteds: ModelOriented } = require("../database/models/index");
const { validateResult } = require("../helpers/validateHelper");
const path = require('path');

// Express-Validator para formulario CREAR ORIENTADO
const validateCreate = [
  check("name") // se fija si existe
    .notEmpty()
    .withMessage("El campo nombre está vacío")
    .isLength({ min: 2, max: 250 })
    .withMessage("Ingrese nombre valido")
    .isAlpha()
    .withMessage("Solo se permiten letras"),
  check("lastname")
    .notEmpty()
    .withMessage("El campo apellido está vacío")
    .isLength({ min: 2, max: 250 })
    .withMessage("Ingrese apellido valido")
    .isAlpha()
    .withMessage("Solo se permiten letras"),
  check("password")
    .notEmpty()
    .withMessage("El campo password está vacío")
    .isLength({ min: 8 })
    .withMessage("Aumenta la cantidad de digitos"),
  check("email")
    .notEmpty()
    .withMessage("El campo email está vacío")
    .isEmail()
    .withMessage("Ingrese email valido")
    .custom(async (value) =>
      ModelOriented.findOne({ where: { email: value } }).then((email) => {
          if (email) {
            return Promise.reject("Este email ya está siendo utilizado");
          }
        })
    ),
  check("phone")
    .notEmpty()
    .withMessage("El campo telefono está vacío")
    .isNumeric()
    .withMessage("Solo se permiten numeros")
    .isLength({ min: 8, max: 50 })
    .withMessage("Ingrese telefono válido"),
  check("program")
    .notEmpty()
    .withMessage("El campo programa está vacío")
    .not()
    .isNumeric()
    .withMessage("Solo se permiten letras")
    .isLength({ min: 4, max: 50 })
    .withMessage("Ups, ese programa todavía no lo tenemos"),
  check("dni")
    .notEmpty()
    .withMessage("El campo DNI está vacío")
    .isNumeric()
    .withMessage("Solo se permiten numeros")
    .isLength({ min: 8 })
    .withMessage("Faltan numeros")
    .custom(async (value) =>
      // eslint-disable-next-line consistent-return
      ModelOriented.findOne({ where: { dni: value } }).then((dni) => {
        if (dni) {
          return Promise.reject("Este DNI ya está siendo utilizado");
        }
      })
    ),
  check("age")
    .notEmpty()
    .withMessage("El campo Edad está vacío")
    .not()
    .isAlpha()
    .withMessage("Ups. Verifique los datos ingresados")
    .isLength({ min: 8 })
    .withMessage("Faltan numeros"),
  check("school").notEmpty().withMessage("El campo escuela está vacío"),
  check("address").notEmpty().withMessage("El campo dirección está vacío"),
  check("why")
    .notEmpty()
    .withMessage("Escriba un breve descripcion de porque se acerca a nosotros"),
  check("photoProfile")
    .custom((value, {req}) => {
      return !!req.file;
    })
    .withMessage("El campo foto está vacío")
    .custom((value, {req}) =>{
      const sizePhoto = 10485760 //10 mb
      return req.file.size < sizePhoto
    })
    .withMessage("El archivo supera el limite de 10 MB")
    .custom((value, { req }) => {
      const filetypes = /jpeg|jpg|png|gif/;
      const mimetype = filetypes.test(req.file.mimetype);
      const extname = filetypes.test(path.extname(req.file.originalname));
      return mimetype & extname
    })
    .withMessage('El archivo debe ser jpg/png/gif/jpeg'),
  (req, res, next) => {
    validateResult(req, res, next);
    /* Esta accion está en un helper
        cumple la funcion de seguir la lectura
        o tirar error si algo falla */
  },
];

module.exports = validateCreate;
