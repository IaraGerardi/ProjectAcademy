const bcrypt = require('bcrypt');
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
    const { name, lastname, email, phone, program, password} = req.body;
    const { dni, age, school, address, why } = req.body;
    
    try {
        const user = await ModelOrientado.create({
            name, //Cuando el nombre de la propiedad es la misma no es necesario poner name: name.
            lastname,
            email,
            program,
            photoProfile: req.file ? req.file.filename : null,

            phone,
            age,
            school,
            address,
            why,

            dni,
            password: await bcrypt.hash(password, 10)
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

const orientadoAndOrientador = async (req, res) => {
    const orientado = await ModelOrientado.findOne(
        {
            where: {
                id: req.params.id
            }
        })
    res.json(orientado)
}

const getAllOrientadores = async (req,res)=>{
    const orientadores = await ModelOrientador.findAll();
    res.json(orientadores)
}

const orientadorToOrientado = async (req, res) => {
    const orientador = req.body.orientador
    await ModelOrientado.update({
        OrientadoreId: orientador
    }, {
        where: {
            id: req.params.id
        }
    })
    console.log(`ID del orientador enviado:${orientador}`)
    res.json(`ID del orientador enviado:${orientador}`)
}

module.exports = {
    createOrientado,
    getAllOrientados,
    orientadorToOrientado,
    orientadoById,
    getAllOrientadores,
    orientadoAndOrientador
}