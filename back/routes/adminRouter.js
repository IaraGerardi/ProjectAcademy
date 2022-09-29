//Express
const express = require ("express");
const routerAdmin = express.Router();
//Controllers
const { createEvento, getEvent, deleteEvento } = require("../controllers/eventosController")
const { getAllOrientados, createOrientado, orientadoById, getAllOrientadores, orientadorToOrientado, orientadoAndOrientador } = require ("../controllers/orientadoController.js");
const { getAllNovedades } = require("../controllers/novedadesController.js");
const { isAuthenticated } = require("../controllers/loginAdminController.js"); //Autenticacion para que solo puedan ingresar usuarios logueados (admins)
const { getAllAdminsProfiles, getAdminProfile } = require("../controllers/profileAdminController.js");
//Middlewares y Validaciones
const photoProfileCheck = require("../middleware/orientadoImages.js");
const validateCreate = require("../validations/createOrientado.js");

//Rutas de la vista privada del Admin
routerAdmin.get('/admin/orientados', getAllOrientados);
routerAdmin.get('/admin/novedades', getAllNovedades);

//Rutas para obtener profiles de admins
routerAdmin.get('/admin/profile', getAllAdminsProfiles);
routerAdmin.get('/admin/profile/:id', getAdminProfile);

//Ruta para crear Orientados
routerAdmin.post('/admin/create', photoProfileCheck, validateCreate, createOrientado);

//Ruta para mostrar al Orientado que esta en la ID
routerAdmin.get('/admin/orientados/:id', orientadoById)

//Ruta para mostrar a todos los orientadores
routerAdmin.get('/admin/orientadores', getAllOrientadores)

//Ruta para mostrar Orientado que esta en la ID y su Orientador
routerAdmin.get('/admin/orientados/:id/orientador', orientadoAndOrientador)

//Ruta para asignar o modificar Orientador a Orientado
routerAdmin.put('/admin/orientados/:id/orientadorToOrientado', orientadorToOrientado)

//Ruta para ver Eventos
routerAdmin.get('/admin/event', getEvent)

//Ruta para crear eventos
routerAdmin.post('/admin/createEvent', createEvento)

//Ruta para eliminar eventos
routerAdmin.delete('/admin/:id/deleteEvent', deleteEvento)

module.exports = routerAdmin;