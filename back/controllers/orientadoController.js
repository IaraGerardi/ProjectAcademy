const bcryptjs = require('bcryptjs');
const { ModelOrientado, ModelOrientador } = require("../database/associations");
/* llama a modelo orientado desde associations 
porque son los ultimos cambios que recibe, 
en caso de no funcionar probar llamando al modelo
desde "../database/models/ModelOrientado.js*/


const getAllOrientados = async (req, res) => {
    try {
        const orientados = await ModelOrientado.findAll();
        res.json(orientados)
    } catch (error) {
        res.json({ message: error.message })
    }
}

const createOrientado = async (req, res) => {
    const { name, lastname, email, phone, program } = req.body;
    const { dni, age, school, address, why } = req.body;
   /*  const photoProfile = req.files[0] ? req.files[0].filename : null */
   const photoProfile = req.files ? req.files.filename : 'default.png'
    const password = await bcryptjs.hash(req.body.password, 10);

    try {
        const user = await ModelOrientado.create({
            name, //Cuando el nombre de la propiedad es la misma no es necesario poner name: name.
            lastname,
            email,
            program,
            photoProfile,

            phone,
            age,
            school,
            address,
            why,

            dni,
            password
        });
        res.json(user)
    } catch (error) {
        res.json({ message: error.message })
    }
}

const orientadoById = async (req, res) => {
    const orientado = await ModelOrientado.findOne(
        {
            where: {
                id: req.params.id
            }
        })
    res.json(orientado)
}

const orientadores = async (req,res)=>{
    const orientadores = await ModelOrientador.findAll();
    res.json(orientadores)
}

const orientadorToOrientado = async (req, res) => {
    await ModelOrientado.update({
        OrientadoreId: req.body.orientador
    }, {
        where: {
            id: req.params.id
        }
    })
}

module.exports = {
    createOrientado,
    getAllOrientados,
    orientadorToOrientado,
    orientadoById,
    orientadores
}