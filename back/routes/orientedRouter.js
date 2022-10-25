// Express
const express = require("express");

const orientedRouter = express.Router();
// Controller
const {
  getAllOriented,
  getAllOrientedPaginated,
  orientedById,
  createOriented,
  counselorToOriented,
  orientedAndCounselor,
  orientedPasswordUpdate
} = require("../controllers/orientedController");
// Middlewares
const { isAuthenticated } = require("../middleware/logAuthentication"); // Autenticacion para usuarios logueados
const photoProfileCheck = require("../middleware/orientedImages");
const validateCreate = require("../validations/createOriented");

// Rutas orientados
orientedRouter.get("/", isAuthenticated, getAllOriented); // trae todos los orientados
orientedRouter.get("/paginated", isAuthenticated, getAllOrientedPaginated); // trae todos los orientados paginados
orientedRouter.get("/:id", isAuthenticated, orientedById); // trae el orientado que se escriba en ':id'
orientedRouter.get("/:id/counselor", isAuthenticated, orientedAndCounselor); // trae al orientado junto con su orientador
orientedRouter.post(
  "/",
  isAuthenticated,
  photoProfileCheck,
  validateCreate,
  createOriented
); // crear orientado
orientedRouter.put(
  "/:id/counselorToOriented",
  isAuthenticated,
  counselorToOriented
); // asigna o modifica un orientador de un orientado seleccionado por id
orientedRouter.put(
  "/:id/updatePassword",
  isAuthenticated,
  orientedPasswordUpdate
); // actualiza la contraseña de un orientado

module.exports = orientedRouter;
