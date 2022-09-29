//Requerimos express, router y traemos los metodos de loginAdminController.js
const express = require ("express");
const routerLogin = express.Router();
const { adminLogin, logout } = require('../controllers/loginAdminController.js')

//Metodo de log in
routerLogin.post('/login', adminLogin)
//Metodo de log out
routerLogin.get('/logout', logout)

//Exportamos routerLogin y lo utilizamos en app.js
module.exports = routerLogin;