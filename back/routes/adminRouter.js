const express = require ("express");
const routerAdmin = express.Router();
const { getAllOrientados, createOrientado, orientadoById, getAllOrientadores, orientadorToOrientado } = require ("../controllers/orientadoController.js");
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

//Ruta para mostrar Orientado
routerAdmin.get('/admin/orientados/:id', orientadoById)

//
routerAdmin.get('/admin/orientadores', getAllOrientadores)
//Ruta para mostrar Orientado que esta en la ID y su Orientador
routerAdmin.get('/admin/orientados/:id/orientador', orientadoById, orientadores)

//Ruta para asignar o modificar Orientador a Orientado
routerAdmin.put('/admin/orientados/:id/orientadorToOrientado', orientadorToOrientado)




module.exports = routerAdmin;