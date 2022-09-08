const express = require ("express");
const routerAdmin = express.Router();
const { getAllOrientados } = require ("../controllers/orientadoController.js");
const { getAllNovedades } = require("../controllers/novedadesController.js");

// Rutas de la vista privada del Admin
routerAdmin.get('/admin/orientados', getAllOrientados);
routerAdmin.get('/admin/novedades', getAllNovedades)

module.exports = routerAdmin;