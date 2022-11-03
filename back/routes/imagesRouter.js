// Express
const express = require("express");

const imagesRouter = express.Router();
// Controller
const { getOrientedImages } = require("../controllers/imagesController");
// Middlewares
const { isAuthenticated } = require("../middleware/logAuthentication"); // Autenticacion para usuarios logueados

// Rutas novedades
imagesRouter.get("/:fileid", isAuthenticated, getOrientedImages); // trae todas las novedades

module.exports = imagesRouter;