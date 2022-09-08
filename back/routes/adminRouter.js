const express = require ("express");
const router = express.Router();
const { getAllOrientados } = require ("../controllers/orientadoController.js");

// Rutas de la vista privada del Admin
router.get('/admin/inicio', getAllOrientados);