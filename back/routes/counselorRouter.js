//Express
const express = require ("express");
const counselorRouter = express.Router();
//Controllers
const { getAllCounselor } = require("../controllers/counselorController.js")
//Middlewares
const { isAuthenticated } = require("../middleware/logAuthentication.js"); //Autenticacion para usuarios logueados

//Ruta orientadores
counselorRouter.get('/', isAuthenticated, getAllCounselor); //trae todos los orientadores


module.exports = counselorRouter;