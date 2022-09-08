const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const sequelize = require('./database/db.js');
const routerAdmin = require ("./routes/adminRouter.js");
//Requerimos Modelos para que se creen en la base de datos de manera fácil y rápida
const ModelOrientador = require('./database/models/ModelOrientador.js');
const ModelOrientado = require('./database/models/ModelOrientado.js');
const ModelNovedades = require('./database/models/ModelNovedades.js');
const ModelAdmin = require('./database/models/ModelAdmin.js');
require('./database/associations.js');



dotenv.config({path: './env/.env'})
const PORT = (process.env.PORT || '3000');

//Para traer datos como objetos(req.params / req.body)
app.use(express.urlencoded({ extended: true }));
//Para poder utilizar json
app.use(express.json());
//carpeta para archivos publicos
app.use(express.static(path.join(__dirname, 'public')));
//
app.use('/', routerAdmin);
//Aviso de conexión a la base de datos

app.listen(PORT, () => {
    console.log(`SERVER UP running in http://localhost:${PORT}`);
    try {
        sequelize.authenticate();
        //true = rompe y crea la base de datos - false = queda inactivo
        sequelize.sync({force: false});
        console.log(`Database conected`);
    } catch (error) {
        console.log(error);
    } 
});