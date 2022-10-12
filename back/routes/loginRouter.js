//Requerimos express, router y traemos los metodos de loginAdminController.js
const express = require ("express");
const loginRouter = express.Router();
const { adminLogin, logout } = require('../controllers/loginAdminController')

//Metodo de log in
loginRouter.post('/admin/login', adminLogin)
//Metodo de log out
loginRouter.get('/logout', logout)

//Exportamos loginRouter y lo utilizamos en app.js
module.exports = loginRouter;