const { check } = require('express-valitador');
const { validationsResult }= require('express-valitador');

const validateResult = (req, res, next) => {
    try {
        validationsResult(req).throw()
        return next()
    } catch (error) {
        res.status(403)
        res.json({errors: error.array()})
    }
}
const validateCreate = [
    check('name')
        .exists()
        .not()
        .isEmpty(),
    check('algonumerico')
        .exist()
        .isNumeric(),
    check('email')
        .exist()
        .isEmail(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]