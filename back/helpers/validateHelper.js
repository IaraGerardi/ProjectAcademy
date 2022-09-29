const { validationResult } = require('express-validator');
const path = require('path');
const fs = require('fs');
/* 
Se encarga de revisar los validationResult de express-Validator y seguir la cadena
o de enviar todos los errores qeu haya en un array y cortar la cadena 
*/

/* 
validationResult trae los errores o viene vacio.
-En caso estar vacio continua la cadena.
-En caso de que no este vacio(osea existan errores):
1° Revisa si existe un archivo(req.file), si existe lo elimina (En el if dentro del else).
2° llegado a throw toma los errores de validationResutls y los usa como errores en el catch
*/
const validateResult = (req, res, next) => {
    try {
        if (validationResult(req).isEmpty()) {
            return next();
        } else {
            if (req.file) {
                fs.unlinkSync(path.join(__dirname, `../../front/src/img-back/orientados/${req.file.filename}`));
            }
            throw validationResult(req)
        }
    } catch (error) {
        res.status(403);
        res.json(error);
    }
};

module.exports = { validateResult };