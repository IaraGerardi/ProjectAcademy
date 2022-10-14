const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const { admins: ModelAdmin } = require("../database/models/index");

exports.adminLogin = async (req, res) => {
  try {
    const { emailLog } = req.body;
    const { passwordLog } = req.body;
    if (!emailLog && !passwordLog) {
      res.status(403).json({
        message: "Ingrese un email y contraseña",
      });
    } else if (!emailLog) {
      res.status(403).json({
        message: "Ingrese un email",
        params: "emailLog",
      });
    } else if (!passwordLog) {
      res.status(403).json({
        message: "Ingrese una contraseña",
        params: "passwordLog",
      });
    } else {
      const admin = await ModelAdmin.scope("withPassword").findOne({
        where: { email: emailLog },
      });
      console.log(passwordLog)
      console.log(admin)
      console.log(admin.password)
      console.log(await bcryptjs.compare(passwordLog, admin.password))
      if (admin == null) {
        res.status(403).json({
          message: "Email incorrecto",
          params: "emailLog",
        });
      } else if (await bcryptjs.compare(passwordLog, admin.password) === false) {
        res.status(403).json({
          message: "Contraseña incorrecta",
          params: "passwordLog",
        });
      } else {
        const loggedAdmin = await ModelAdmin.findOne({
          where: { email: emailLog },
        });
        const { id } = admin;
        const token = jwt.sign({ id: id }, process.env.JWT_SECRET, {
          expiresIn: 24 * 60 * 60 * 1000,
        });
        console.log(`token: ${token} for user : ${admin.user}`);
        const cookiesOptions = {
          expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // La cookie expira en 24 horas
          httpOnly: true,
        };
        res.cookie("jwt", token, cookiesOptions);
        res.status(200).json({
          message: "Succesful Login",
          admin: loggedAdmin,
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

exports.logout = (req, res) => {
  try {
    res.status(200).clearCookie("jwt").json({ message: "Cookie cleared" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};
