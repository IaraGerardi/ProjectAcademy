//Express
const express = require ("express");
const eventsRouter = express.Router();
//Controller
const { createEvent, getEvents, deleteEvent } = require("../controllers/eventController")
//Middlewares
const { isAuthenticated } = require("../middleware/logAuthentication"); //Autenticacion para usuarios logueados
const { eventValidator } = require("../validations/createEvent");

//Ruta eventos
eventsRouter.get('/', isAuthenticated, getEvents); //trae todos los eventos
eventsRouter.post('/create', isAuthenticated, eventValidator, createEvent); //crear eventos
eventsRouter.delete('/:id/delete', isAuthenticated, deleteEvent); //eliminar eventos


module.exports = eventsRouter;