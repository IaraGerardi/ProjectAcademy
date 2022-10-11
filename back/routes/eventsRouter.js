//Express
const express = require ("express");
const eventsRouter = express.Router();
//Controller
const { createEvent, getEvents, deleteEvent } = require("../controllers/eventController")
//Middlewares
const { isAuthenticated } = require("../middleware/logAuthentication.js"); //Autenticacion para usuarios logueados
const { eventValidator } = require("../validations/createEvent");

//Ruta eventos
eventsRouter.get('/events', isAuthenticated, getEvents); //trae todos los eventos
eventsRouter.post('/event/create', isAuthenticated, eventValidator, createEvent); //crear eventos
eventsRouter.delete('/event/:id/delete', isAuthenticated, deleteEvent); //eliminar eventos


module.exports = eventsRouter;