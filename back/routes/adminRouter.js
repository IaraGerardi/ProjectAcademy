const express = require ("express");
const routerAdmin = express.Router();
const { getAllOrientados } = require ("../controllers/orientadoController.js");
const { getAllNovedades } = require("../controllers/novedadesController.js");
const { isAuthenticated } = require("../controllers/loginAdminController.js"); //Autenticacion para que solo puedan ingresar usuarios logueados (admins)
const { getAllAdminsProfiles, getAdminProfile } = require("../controllers/profileAdminController.js");

// Rutas de la vista privada del Admin
routerAdmin.get('/admin/orientados', getAllOrientados);
routerAdmin.get('/admin/novedades', getAllNovedades);

//Rutas para obtener profiles
routerAdmin.get('/admin/profile', getAllAdminsProfiles);
routerAdmin.get('/admin/profile/:id', getAdminProfile);


module.exports = routerAdmin;