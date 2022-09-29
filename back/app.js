const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const sequelize = require('./database/db.js');
const cookieParser = require('cookie-parser')
const cors = require('cors');
const routerAdmin = require("./routes/adminRouter.js");
const routerLogin = require("./routes/loginRouter.js");
//Requerimos Modelos y sus asociaciones para que se creen en la base de datos de manera fácil y rápida
const ModelOrientador = require('./database/models/ModelOrientador.js');
const ModelOrientado = require('./database/models/ModelOrientado.js');
const ModelNovedades = require('./database/models/ModelNovedades.js');
const ModelAdmin = require('./database/models/ModelAdmin.js');
const ModelEvento = require('./database/models/ModelEvento.js');
require('./database/associations.js');



dotenv.config({ path: './env/.env' })
const PORT = (process.env.PORT || '3000');
//Para poder utilizar cors
app.use(cors({
    credentials: true,
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"]
}));
//Para poder utilizar json
app.use(express.json());
//Para traer datos como objetos(req.params / req.body)
app.use(express.urlencoded({ extended: true }));
//Para poder utilizar cookie-parser
app.use(cookieParser())
//carpeta para archivos publicos
app.use(express.static(path.join(__dirname, 'public')));
//
app.use('/', routerAdmin);
app.use('/', routerLogin);


//Aviso de conexión a la base de datos
app.listen(PORT, () => {
    console.log(`SERVER UP running in http://localhost:${PORT}`);
    try {
        sequelize.authenticate();
        //true = rompe y crea la base de datos - false = queda inactivo
        //sequelize.sync({force: true});
        console.log(`Database connected`);
    } catch (error) {
        console.log(error);
    }
});