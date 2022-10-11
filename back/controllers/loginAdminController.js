const jwt = require('jsonwebtoken')
const ModelAdmin = require('../database/models/ModelAdmin.js')
const { promisify } = require('util')

exports.adminLogin = async (req, res) => {
    try {
        const emailLog = req.body.emailLog
        const passwordLog = req.body.passwordLog
        if (!emailLog && !passwordLog) {
            res.json({
                alertMessage: "Ingrese un email y una contraseña",
            })
        } else if (!emailLog) {
            res.json({
                alertMessage: "Ingrese un email",
                params: 'emailLog'
            })
        } else if (!passwordLog) {
            res.json({
                alertMessage: "Ingrese una contraseña",
                params: "passwordLog"
            })
        } else {
            const admin = await ModelAdmin.findOne({
                where: { email: emailLog }
            })
            if (admin.length == 0) {
                res.json({
                    alertMessage: "Email incorrecto",
                    params: "emailLog"
                })
            } else if (passwordLog !== admin.password) {
                console.log(admin)
                console.log(admin)
                console.log(admin.password)
                console.log(passwordLog)
                res.json({
                    alertMessage: "Contraseña incorrecta",
                    params: "passwordLog"
                })
            } else {
                const loggedAdmin = await ModelAdmin.findOne({
                    where: { email: emailLog },
                    attributes: {exclude: ['password']}
                })
                const id = admin.id
                const token = jwt.sign({ id: id }, process.env.JWT_SECRET, {
                    expiresIn: 24 * 60 * 60 * 1000
                })
                console.log("TOKEN: " + token + " para el USUARIO : " + admin.user)
                const cookiesOptions = {
                    expires: new Date(Date.now() + 24 * 60 * 60 * 1000), //La cookie expira en 24 horas
                    httpOnly: true
                }
                res.cookie('jwt', token, cookiesOptions) // cookieOptions me tira que expires es invalido, revisar más adelante (Solucionado colocando "JWT_COOKIE_EXPIRES =" en el .env)
                res.json({
                    alertMessage: "¡LOGIN CORRECTO!",
                    si: 'si',
                    admin: loggedAdmin
                });
            }
        }
    } catch (error) {
        console.log(error)
    }
}

exports.logout = (req, res) => {
    res.clearCookie('jwt').send('cookie limpiada')
}