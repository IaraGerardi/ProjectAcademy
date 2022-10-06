const bcryptjs = require('bcryptjs');
const { ModelOriented, ModelCounselor } = require("../database/associations");
/* llama a modelo oriented desde associations 
porque son los ultimos cambios que recibe, 
en caso de no funcionar probar llamando al modelo
desde "../database/models/ModelOriented.js*/

//URL: /admin/orientados
const getAllOriented = async (req, res) => {
    try {
        const oriented = await ModelOriented.findAll({
            attributes: ['id', 'name', 'lastname', 'photoProfile', 'CounselorId'],
            //order: [['id', 'DESC']]
        });
        res.json(oriented)
    } catch (error) {
        res.json({ message: error.message });
    }
}

//URL: /admin/pruebaorienteds
const getAllOriented2 = async (req, res) => {
    try {
        /* En la query pasamos parametros de pagina, tamaño de cuantos 
        datos se mostraran y el orden (Por defecto será la  pagina 0,
        orden ascendente y 5 orientados que se muestren).
        limit: Cantidad de datos limite que trae,
        offset: se establece desde que dato arranca la query 
        order: orden que se muestran(Ascendente o Descendente by ID)
        Ejemplo: 1(page) * 5(size/limit) = 5(Offset) 
        Arranca desde el quinto dato y muestra un maximo de 5 posteriores. */
        const { page = 0, size = 5, order = 'ASC' } = req.query;
        let options = {
            limit: +size,
            offset: (+page) * (+size),
            order: [['id', order]],
            attributes: { exclude: ['password'] }
        }
        const { count, rows } = await ModelOriented.findAndCountAll(options)

        res.json({
            total: count,
            categories: rows
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

const createOriented = async (req, res) => {
    const { name, lastname, email, phone, program } = req.body;
    const { dni, age, school, address, why } = req.body;
    try {
        const user = await ModelOriented.create({
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

        res.json({
            status: 'Successful',
            id: user.id
        })
    } catch (error) {
        console.log(error)
        res.json({ message: error.message })
    }
}

const orientedById = async (req, res) => {
    const oriented = await ModelOriented.findOne(
        {
            where: {
                id: req.params.id
            },
            attributes: { exclude: ['password'] }
        })
    res.json(oriented)
}

const orientedAndCounselor = async (req, res) => {
    const oriented = await ModelOriented.findOne(
        {
            where: {
                id: req.params.id
            }
        })
    res.json(oriented)
}

const getAllCounselor = async (req, res) => {
    const counselor = await ModelCounselor.findAll();
    res.json(counselor)
}

const counselorToOriented = async (req, res) => {
    const counselor = req.body.counselor
    await ModelOriented.update({
        CounselorId: counselor
    }, {
        where: {
            id: req.params.id
        }
    })
    console.log(`ID del orientador enviado:${counselor}`)
    res.json(`ID del orientador enviado:${counselor}`)
}

module.exports = {
    createOriented,
    getAllOriented,
    getAllOriented2,
    counselorToOriented,
    orientedById,
    getAllCounselor,
    orientedAndCounselor
}