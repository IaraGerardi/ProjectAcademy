const { check } = require("express-validator");
const { validateResult } = require("../helpers/validateHelper");
const { admins: ModelAdmin } = require("../database/models/index");

const adminLogValidator = [
    /* ------Inpunt emailLog------- */
    check('emailLog')
        .notEmpty().withMessage('El campo email está vacío')
        .isEmail().withMessage('Debe ser un email valido')
        .custom(async (value, { req }) => {
            const { passwordLog } = req.body
            const admin = await ModelAdmin.scope("withPassword").findOne({
                where: { email: value },
            });
            if(!admin || !(passwordLog == admin.password)){
                return Promise.reject("Email o Password incorrectos");
            }
        }),
    /* ------Inpunt passwordLog------- */
    check('passwordLog')
        .notEmpty().withMessage('El campo password está vacío'),
    (req, res, next) => {
        validateResult(req, res, next);
    }
]

module.exports = adminLogValidator;