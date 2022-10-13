const jwt = require('jsonwebtoken')
const { orienteds : ModelOriented } = require('../database/models/index')


exports.orientedLogin = async (req, res) => {
    try {
        const emailLog = req.body.emailLog
        const passwordLog = req.body.passwordLog
        if (!emailLog && !passwordLog) {
            res.json({
                message: "Enter email and password",
            })
        } else if (!emailLog) {
            res.json({
                message: "Enter an email",
                params: 'emailLog'
            })
        } else if (!passwordLog) {
            res.json({
                message: "Enter a password",
                params: "passwordLog"
            })
        } else {
            const oriented = await ModelOriented.scope('withPassword').findOne(
                {
                where: { email: emailLog }
            })
            console.log(oriented)
            if (oriented.length == 0) {
                res.json({
                    message: "Incorrect Email",
                    params: "emailLog"
                })
            } else if (passwordLog !== oriented.password) {
                res.json({
                    message: "Incorrect Password",
                    params: "passwordLog"
                })
            } else {
            const loggedOriented = await ModelOriented.findOne({
                where: { email: emailLog}
            })
                const id = oriented.id
                const token = jwt.sign({ id: id }, process.env.JWT_SECRET, {
                    expiresIn: 24 * 60 * 60 * 1000
                })
                console.log("token: " + token + " for user : " + oriented.user)
                const cookiesOptions = {
                    expires: new Date(Date.now() + 24 * 60 * 60 * 1000), //La cookie expira en 24 horas
                    httpOnly: true
                }
                res.cookie('jwt', token, cookiesOptions)
                res.status(200).json({
                    message: "Succesful Login",
                    oriented: loggedOriented
                });
            }
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({message: error.message});
    }
}