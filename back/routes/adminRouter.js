//Express
const express = require ("express");
const routerAdmin = express.Router();
//Controllers
const { createEvent, getEvents, deleteEvent } = require("../controllers/eventController")
const { getAllOriented, createOriented, orientedById, getAllCounselor, counselorToOriented, orientedAndCounselor, getAllOrientedPaginated } = require ("../controllers/orientedController.js");
const { getAllNews } = require("../controllers/newsController.js");
const { getAllAdminsProfiles, getAdminProfile } = require("../controllers/profileAdminController.js");
//Autenticacion para que solo puedan ingresar usuarios logueados (admins)
const { isAuthenticated } = require("../middleware/logAuthentication.js"); 
//Middlewares y Validaciones
const photoProfileCheck = require("../middleware/orientedImages.js");
const validateCreate = require("../validations/createOriented.js");
const { eventValidator } = require("../validations/createEvent");

//Rutas de la vista privada del Admin
routerAdmin.get('/admin/oriented', isAuthenticated, getAllOriented);
routerAdmin.get('/admin/orientedPaginated', isAuthenticated, getAllOrientedPaginated);
routerAdmin.get('/admin/news', isAuthenticated, getAllNews);

//Rutas para obtener profiles de admins
routerAdmin.get('/admin/profile', isAuthenticated,  getAllAdminsProfiles);
routerAdmin.get('/admin/profile/:id', isAuthenticated, getAdminProfile);

//Ruta para crear Orientados
routerAdmin.post('/admin/createOriented', isAuthenticated, photoProfileCheck, validateCreate, createOriented);

//Ruta para mostrar al Orientado que esta en la ID
routerAdmin.get('/admin/oriented/:id', isAuthenticated, orientedById);

//Ruta para mostrar a todos los orientadores
routerAdmin.get('/admin/counselor', isAuthenticated, getAllCounselor);

//Ruta para mostrar Orientado que esta en la ID y su Orientador
routerAdmin.get('/admin/oriented/:id/counselor', isAuthenticated, orientedAndCounselor);

//Ruta para asignar o modificar Orientador a Orientado 
routerAdmin.put('/admin/oriented/:id/counselorToOriented', isAuthenticated, counselorToOriented);

//Ruta para ver Eventos
routerAdmin.get('/admin/eventList', isAuthenticated, getEvents);

//Ruta para crear eventos
routerAdmin.post('/admin/createEvent', isAuthenticated, eventValidator, createEvent);

//Ruta para eliminar eventos
routerAdmin.delete('/admin/:id/deleteEvent', isAuthenticated, deleteEvent);

module.exports = routerAdmin;