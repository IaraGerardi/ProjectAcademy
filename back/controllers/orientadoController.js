const { ModelOrientado } = require("../database/associations");
/* llama a modelo orientado desde associations 
porque son los ultimos cambios que recibe, 
en caso de no funcionar probar llamando al modelo
desde "../database/models/ModelOrientado.js*/


const getAllOrientados = async (req, res) => {
    try {
        const orientados = await ModelOrientado.findAll();
        res.json(orientados)
    } catch (error) {
        res.json({message: error.message})
    }
}

module.exports = {
    getAllOrientados    
}