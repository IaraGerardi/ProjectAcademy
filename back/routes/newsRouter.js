//Express
const express = require ("express");
const newsRouter = express.Router();
//Controller
const { getAllNews } = require("../controllers/newsController.js");
//Middlewares
const { isAuthenticated } = require("../middleware/logAuthentication.js"); //Autenticacion para usuarios logueados

//Rutas novedades
newsRouter.get('/news', isAuthenticated, getAllNews); //trae todas las novedades

module.exports = newsRouter;