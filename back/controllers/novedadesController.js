const ModelNovedades = require("../database/models/ModelNovedades.js");


const getAllNovedades = async (req, res) => {
    try {
        const novedades = await ModelNovedades.findAll();
        res.json(novedades)
    } catch (error) {
        res.json({message: error.message})
    }
}

module.exports = {
    getAllNovedades
}