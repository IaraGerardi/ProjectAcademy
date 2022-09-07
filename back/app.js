const express = require('express');
const app = express();
const db = require('./database/db.js');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({path: './env/.env'})
const PORT = (process.env.PORT || '3000');

//Para traer datos como objetos(req.params / req.body)
app.use(express.urlencoded({ extended: true }));
//Para poder utilizar json
app.use(express.json());
//carpeta para archivos publicos
app.use(express.static(path.join(__dirname, 'public')));

//Aviso de conección a la base de datos
try {
    db.authenticate();
    //true = rompe y crea la base de datos - false queda inactivo
    //db.sync({force: false});
    console.log(`Database conected`);
} catch (error) {
    console.log(error);
} 
app.listen(PORT, () => {
    console.log(`SERVER UP running in http://localhost:${PORT}`);
});