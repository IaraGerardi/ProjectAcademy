const jwt = require('jsonwebtoken')
const { admins : ModelAdmin} = require('../database/models/index')


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
            const admin = await ModelAdmin/* .scope('withPassword') */.findOne({
                where: { email: emailLog }
            })
            if (admin.length == 0) {
                res.json({
                    alertMessage: "Email incorrecto",
                    params: "emailLog"
                })
            } else if (passwordLog !== admin.password) {
                res.json({
                    alertMessage: "Contraseña incorrecta",
                    params: "passwordLog"
                })
            } else {
            const loggedAdmin = await ModelAdmin.findOne({
                where: { email: emailLog}
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
                res.cookie('jwt', token, cookiesOptions)
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