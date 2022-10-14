// Express
const express = require("express");

const newsRouter = express.Router();
// Controller
const { getAllNews } = require("../controllers/newsController");
// Middlewares
const { isAuthenticated } = require("../middleware/logAuthentication"); // Autenticacion para usuarios logueados

// Rutas novedades
newsRouter.get("/", isAuthenticated, getAllNews); // trae todas las novedades

module.exports = newsRouter;
