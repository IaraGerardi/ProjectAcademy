const jwt = require("jsonwebtoken");
const { admins: ModelAdmin } = require("../database/models/index");

const adminLogin = async (req, res) => {
  try {
    const { emailLog } = req.body;
    const { passwordLog } = req.body;
    if (!emailLog || !passwordLog) {
      res.status(403).json({
        message: "Ingrese email y contraseña",
      });
    } else {
      const admin = await ModelAdmin.scope("withPassword").findOne({
        where: { email: emailLog },
      });
      if (!admin || !(passwordLog == admin.password)) {
        res.status(403).json({
          message: "Datos incorrectos",
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
          message: "Successful Login",
          info: loggedAdmin,
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Something went wrong' });
  }
};

const logout = (req, res) => {
  try {
    res.status(200).clearCookie("jwt").json({ message: "Cookie cleared"});
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Something went wrong' });
  }
};

module.exports = {
  adminLogin,
  logout
}