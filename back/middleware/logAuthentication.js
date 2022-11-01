const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const { admins: ModelAdmin } = require("../database/models/index");

// eslint-disable-next-line consistent-return
const isAuthenticated = async (req, res, next) => {
  console.log(`el req de cookie jwt: ${req.cookies.jwt}`);
  if (req.cookies.jwt) {
    try {
      const decoded = await promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET
      );
      const admin = await ModelAdmin.findAll({
        where: { id: decoded.id },
      });
      if (!admin) {
        return next();
      }
      // eslint-disable-next-line prefer-destructuring
      req.admin = admin[0];
      return next();
    } catch (error) {
      console.log(error);
      return next();
    }
  } else {
    res.status(403).json({ message: "Not logged" });
  }
};


module.exports = {
  isAuthenticated
}