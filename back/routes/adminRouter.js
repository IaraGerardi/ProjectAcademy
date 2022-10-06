//Express
const express = require ("express");
const routerAdmin = express.Router();
//Controllers
const { createEvent, getEvents, deleteEvent } = require("../controllers/eventController")
const { getAllOriented, createOriented, orientedById, getAllCounselor, counselorToOriented, orientedAndCounselor, getAllOriented2 } = require ("../controllers/orientedController.js");
const { getAllNovedades } = require("../controllers/newsController.js");
const { getAllAdminsProfiles, getAdminProfile } = require("../controllers/profileAdminController.js");
//Autenticacion para que solo puedan ingresar usuarios logueados (admins)
const { isAuthenticated } = require("../controllers/loginAdminController.js"); 
//Middlewares y Validaciones
const photoProfileCheck = require("../middleware/orientedImages.js");
const validateCreate = require("../validations/createOriented.js");
const { eventValidator } = require("../validations/createEvent");

//Rutas de la vista privada del Admin
routerAdmin.get('/admin/orientados', isAuthenticated, getAllOriented);
routerAdmin.get('/admin/pruebaorientados', isAuthenticated, getAllOriented2); //Es de prueba despues se borra
routerAdmin.get('/admin/novedades', isAuthenticated, getAllNovedades);

//Rutas para obtener profiles de admins
routerAdmin.get('/admin/profile', isAuthenticated,  getAllAdminsProfiles);
routerAdmin.get('/admin/profile/:id', isAuthenticated, getAdminProfile);

//Ruta para crear Orientados
routerAdmin.post('/admin/create', isAuthenticated, photoProfileCheck, validateCreate, createOriented);

//Ruta para mostrar al Orientado que esta en la ID
routerAdmin.get('/admin/orientados/:id', isAuthenticated, orientedById)

//Ruta para mostrar a todos los orientadores
routerAdmin.get('/admin/counselor', isAuthenticated, getAllCounselor)

//Ruta para mostrar Orientado que esta en la ID y su Orientador
routerAdmin.get('/admin/orientados/:id/orientador', isAuthenticated, orientedAndCounselor)

//Ruta para asignar o modificar Orientador a Orientado 
routerAdmin.put('/admin/orientados/:id/orientadorToOrientado', isAuthenticated, counselorToOriented)

//Ruta para ver Eventos
routerAdmin.get('/admin/event', isAuthenticated, getEvents)

//Ruta para crear eventos
routerAdmin.post('/admin/createEvent', isAuthenticated, eventValidator, createEvent)

//Ruta para eliminar eventos
routerAdmin.delete('/admin/:id/deleteEvent', isAuthenticated, deleteEvent)

module.exports = routerAdmin;