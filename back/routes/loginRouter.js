const express = require ("express");
const routerLogin = express.Router();
const { adminLogin } = require('../controllers/loginAdminController.js')

routerLogin.post('/login', adminLogin)

module.exports = routerLogin;