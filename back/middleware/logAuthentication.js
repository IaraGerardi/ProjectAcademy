const ModelAdmin = require('../database/models/ModelAdmin')
const jwt = require('jsonwebtoken')
const { promisify } = require('util')

exports.isAuthenticated = async (req, res, next) => {
    console.log(`el req de cookie jwt: ${req.cookies.jwt}`)
    if (req.cookies.jwt) {
        try {
            const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET)
            const admin = await ModelAdmin.findAll({
                where: { id: decoded.id }
            })
            if (!admin) { return next() }
            req.admin = admin[0]
            return next()
        } catch (error) {
            console.log(error)
            return next()
        }
    } else {
        res.json({ logged: 'Not logged' })
    }
}