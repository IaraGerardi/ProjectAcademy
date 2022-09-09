const express = require ("express");
const routerAdmin = express.Router();
const { getAllOrientados } = require ("../controllers/orientadoController.js");
const { getAllNovedades } = require("../controllers/novedadesController.js");
const { isAuthenticated } = require("../controllers/loginAdminController.js"); //Autenticacion para que solo puedan ingresar usuarios logueados (admins)

// Rutas de la vista privada del Admin
routerAdmin.get('/admin/orientados', getAllOrientados);
routerAdmin.get('/admin/novedades', getAllNovedades)

module.exports = routerAdmin;