// Requerimos express, router y traemos los metodos de loginAdminController.js
const express = require("express");

const loginRouter = express.Router();
const { adminLogin, logout } = require("../controllers/loginAdminController");
const { orientedLogin } = require("../controllers/loginOrientedController");
const adminLogValidator = require("../validations/adminLogin");

// Metodo de log in (admin)
loginRouter.post("/admins/login",adminLogValidator, adminLogin);
// Metodo de log in (oriented)
loginRouter.post("/oriented/login", orientedLogin);
// Metodo de log out
loginRouter.get("/logout", logout);

// Exportamos loginRouter y lo utilizamos en app.js
module.exports = loginRouter;
