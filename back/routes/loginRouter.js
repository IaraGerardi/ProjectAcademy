const express = require ("express");
const routerLogin = express.Router();
const { adminLogin, logout } = require('../controllers/loginAdminController.js')

routerLogin.post('/login', adminLogin)
routerLogin.get('/logout', logout)

module.exports = routerLogin;