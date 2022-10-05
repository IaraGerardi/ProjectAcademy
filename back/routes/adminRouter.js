//Express
const express = require ("express");
const routerAdmin = express.Router();
//Controllers
const { createEvento, getEvents, deleteEvent } = require("../controllers/eventosController")
const { getAllOrientados, createOrientado, orientadoById, getAllOrientadores, orientadorToOrientado, orientadoAndOrientador, getAllOrientados2 } = require ("../controllers/orientadoController.js");
const { getAllNovedades } = require("../controllers/novedadesController.js");
const { getAllAdminsProfiles, getAdminProfile } = require("../controllers/profileAdminController.js");
//Autenticacion para que solo puedan ingresar usuarios logueados (admins)
const { isAuthenticated } = require("../controllers/loginAdminController.js"); 
//Middlewares y Validaciones
const photoProfileCheck = require("../middleware/orientadoImages.js");
const validateCreate = require("../validations/createOrientado.js");
const { eventValidator } = require("../validations/createEvento");

//Rutas de la vista privada del Admin
routerAdmin.get('/admin/orientados', isAuthenticated, getAllOrientados);
routerAdmin.get('/admin/pruebaorientados', isAuthenticated, getAllOrientados2); //Es de prueba despues se borra
routerAdmin.get('/admin/novedades', isAuthenticated, getAllNovedades);

//Rutas para obtener profiles de admins
routerAdmin.get('/admin/profile', isAuthenticated,  getAllAdminsProfiles);
routerAdmin.get('/admin/profile/:id', isAuthenticated, getAdminProfile);

//Ruta para crear Orientados
routerAdmin.post('/admin/create', isAuthenticated, photoProfileCheck, validateCreate, createOrientado);

//Ruta para mostrar al Orientado que esta en la ID
routerAdmin.get('/admin/orientados/:id', isAuthenticated, orientadoById)

//Ruta para mostrar a todos los orientadores
routerAdmin.get('/admin/orientadores', isAuthenticated, getAllOrientadores)

//Ruta para mostrar Orientado que esta en la ID y su Orientador
routerAdmin.get('/admin/orientados/:id/orientador', isAuthenticated, orientadoAndOrientador)

//Ruta para asignar o modificar Orientador a Orientado 
routerAdmin.put('/admin/orientados/:id/orientadorToOrientado', isAuthenticated, orientadorToOrientado)

//Ruta para ver Eventos
routerAdmin.get('/admin/event', isAuthenticated, getEvents)

//Ruta para crear eventos
routerAdmin.post('/admin/createEvent', isAuthenticated, eventValidator, createEvento)

//Ruta para eliminar eventos
routerAdmin.delete('/admin/:id/deleteEvent', isAuthenticated, deleteEvent)

module.exports = routerAdmin;