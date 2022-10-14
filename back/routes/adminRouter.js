// Express
const express = require("express");

const adminRouter = express.Router();
// Controllers
const { getAllAdmins, getAdmin } = require("../controllers/adminController");
// Middlewares y Validaciones
const { isAuthenticated } = require("../middleware/logAuthentication"); // Autenticacion para usuarios logueados

// Rutas admins
adminRouter.get("/", isAuthenticated, getAllAdmins); // trae todos los admins
adminRouter.get("/:id", isAuthenticated, getAdmin); // trae un admin que selecciones en id

module.exports = adminRouter;
