const { validationResult } = require('express-validator');
/* 
Se encarga de revisar los validationResult de express-Validator y seguir la cadena
o de enviar todos los errores qeu haya en un array y cortar la cadena 
*/
const validateResult = (req, res, next) => {
    try {
        validationResult(req).throw();
        return next();
    } catch (error) {
        res.status(403);
        res.send({errors: error.array()});
    }
};

module.exports = { validateResult };