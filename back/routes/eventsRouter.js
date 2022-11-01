// Express
const express = require("express");

const eventsRouter = express.Router();
// Controller
const {
  createEvent,
  getEvents,
  getEventById,
  deleteEvent,
} = require("../controllers/eventController");
// Middlewares
const { isAuthenticated } = require("../middleware/logAuthentication"); // Autenticacion para usuarios logueados
const { eventValidator } = require("../validations/createEvent");

// Ruta eventos
eventsRouter.get("/", isAuthenticated, getEvents); // trae todos los eventos
eventsRouter.get("/:id", isAuthenticated, getEventById); // trae todos los eventos
eventsRouter.post("/", isAuthenticated, eventValidator, createEvent); // crear eventos
eventsRouter.delete("/:id", isAuthenticated, deleteEvent); // eliminar eventos

module.exports = eventsRouter;
