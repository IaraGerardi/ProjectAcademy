const jwt = require('jsonwebtoken')
const ModelAdmin = require('../database/models/ModelAdmin.js')
/* const bcryptjs = require('bcryptjs') */
const {promisify} = require('util')

exports.adminLogin = async (req, res) => {
    try {
        const emailLog = req.body.emailLog
        const passwordLog = req.body.passwordLog
        if(!emailLog && !passwordLog) {
            res.json({
                alert: true,
                alertTitle: "Advertencia",
                alertMessage: "Ingrese un email y una contraseña",
                alertIcon: 'info',
                showConfirmButton: true,
                timer: false,
                ruta: 'login'
            })
        } else if (!emailLog) {
            res.json({
                alert: true,
                alertTitle: "Advertencia",
                alertMessage: "Ingrese un email",
                alertIcon: 'info',
                showConfirmButton: true,
                timer: false,
                ruta: 'login'
            })
        } else if(!passwordLog) {
            res.json({
                alert: true,
                alertTitle: "Advertencia",
                alertMessage: "Ingrese una contraseña",
                alertIcon: 'info',
                showConfirmButton: true,
                timer: false,
                ruta: 'login'
            })
        } else {
            const admin = await ModelAdmin.findAll({
                where: {email:emailLog}
                })
                console.log(admin)
            if (admin.length == 0) {
                res.json({
                    alert: true,
                    alertTitle: "Error",
                    alertMessage: "Email incorrecto",
                    alertIcon: 'error',
                    showConfirmButton: true,
                    timer: false,
                    ruta: 'login'
                })
            } else if(passwordLog !== admin[0].password){
                console.log(admin)
                console.log(admin[0])
                console.log(admin[0].password)
                console.log(passwordLog)
                res.json({
                    alert: true,
                    alertTitle: "Error",
                    alertMessage: "Password incorrecta",
                    alertIcon: 'error',
                    showConfirmButton: true,
                    timer: false,
                    ruta: 'login'
                })
            }else {
                const id = admin[0].id
                const token = jwt.sign({ id: id }, process.env.JWT_SECRETO, {
                    expiresIn: process.env.JWT_TIEMPO_EXPIRA
                })
                console.log("TOKEN: " + token + " para el USUARIO : " + admin[0].user)
                const cookiesOptions = {
                    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                    httpOnly: true
                }
                res.cookie('jwt', token, cookiesOptions) // cookieOptions me tira que expires es invalido, revisar más adelante (Solucionado colocando "JWT_COOKIE_EXPIRES =" en el .env)
                res.json({
                    alert: true,
                    alertTitle: "Conexión exitosa",
                    alertMessage: "¡LOGIN CORRECTO!",
                    alertIcon: 'success',
                    showConfirmButton: false,
                    timer: 800,
                    ruta: '',
                    si:'si',
                    token: token,
                    cookiesOptions: cookiesOptions
                });
            }
        }
        } catch (error) {
        console.log(error)
    }
}


exports.isAuthenticated = async (req, res, next) => {
    if (req.cookies.jwt) {
        try {
            const decodificada = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRETO)
            const admin = await ModelAdmin.findAll({
                where: { id: decodificada.id }
            })
            if (!admin) { return next() }
            req.admin = admin[0]
            return next()

        } catch (error) {
            console.log(error)
            return next()
        }
    } else {
            res.json({mensaje: 'Usuario no logueado, porfavor inicie sesion'})
    }
}

exports.logout = (req, res) => {
    res.clearCookie('jwt')
    res.json("Usuario deslogueado")
}