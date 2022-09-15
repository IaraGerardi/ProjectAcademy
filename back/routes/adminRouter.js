const express = require ("express");
const routerAdmin = express.Router();
const { getAllOrientados, createOrientado } = require ("../controllers/orientadoController.js");
const { getAllNovedades } = require("../controllers/novedadesController.js");
const { isAuthenticated } = require("../controllers/loginAdminController.js"); //Autenticacion para que solo puedan ingresar usuarios logueados (admins)
const { getAllAdminsProfiles, getAdminProfile } = require("../controllers/profileAdminController.js");
const userImage = require("../middleware/orientadoImages.js");

// Rutas de la vista privada del Admin
routerAdmin.get('/admin/orientados', getAllOrientados);
routerAdmin.get('/admin/novedades', getAllNovedades);

//Rutas para obtener profiles
routerAdmin.get('/admin/profile', getAllAdminsProfiles);
routerAdmin.get('/admin/profile/:id', getAdminProfile);

//Ruta para crear Orientados
routerAdmin.post('/admin/create', userImage.any(), createOrientado);

module.exports = routerAdmin;