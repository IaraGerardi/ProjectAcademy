//Express
const express = require ("express");
const orientedRouter = express.Router();
//Controller
const { getAllOriented, getAllOrientedPaginated, orientedById, createOriented, counselorToOriented, orientedAndCounselor } = require ("../controllers/orientedController.js");
//Middlewares
const { isAuthenticated } = require("../middleware/logAuthentication.js"); //Autenticacion para usuarios logueados
const photoProfileCheck = require("../middleware/orientedImages.js");
const validateCreate = require("../validations/createOriented.js");

//Rutas orientados
orientedRouter.get('/', isAuthenticated, getAllOriented); //trae todos los orientados
orientedRouter.get('/paginated', isAuthenticated, getAllOrientedPaginated); //trae todos los orientados paginados
orientedRouter.get('/:id', isAuthenticated, orientedById); //trae el orientado que se escriba en ':id'
orientedRouter.get('/:id/counselor', isAuthenticated, orientedAndCounselor); //trae al orientado junto con su orientador
orientedRouter.post('/create', isAuthenticated, photoProfileCheck, validateCreate, createOriented); //crear orientado
orientedRouter.put('/:id/counselorToOriented', isAuthenticated, counselorToOriented); //asigna o modifica un orientador de un orientado seleccionado por id


module.exports = orientedRouter;