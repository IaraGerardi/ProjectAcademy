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

const getAllOrientados2 = async (req, res) => {
    try {
        const { page = 0, size = 5} = req.query;  //En la query pasamos parametros de pagina y tamaño de cuantos datos se mostraran(Por defecto será pagina 0 y 5 orientados que se muestren)
        let options = {
            limit: Number(size),
            offset: Number(page) * Number(size)
        }
        const { count , rows } = await ModelOrientado.findAndCountAll(options)

        res.json({
            total: count,
            categories: rows
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

const createOrientado = async (req, res) => {
    const { name, lastname, email, phone, program} = req.body;
    const { dni, age, school, address, why } = req.body;
    try {
        const user = await ModelOrientado.create({
            name: name, //Cuando el nombre de la propiedad es la misma no es necesario poner name: name.
            lastname: lastname,
            email: email,
            program: program,
            photoProfile: req.file ? req.file.filename : null,
            phone: phone,
            age: age,
            school: school,
            address: address,
            why: why,
            dni: dni,
            password: await bcryptjs.hash(req.body.password, 10)
        });

        res.json({id: user.id})
    } catch (error) {
        console.log(error)
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
    getAllOrientados2,
    orientadorToOrientado,
    orientadoById,
    getAllOrientadores,
    orientadoAndOrientador
}