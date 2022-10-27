const jwt = require("jsonwebtoken");
const { admins: ModelAdmin } = require("../database/models/index");

const adminLogin = async (req, res) => {
  try {
<<<<<<< HEAD
    const { emailLog } = req.body
        const admin = await ModelAdmin.findOne({
=======
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
>>>>>>> develop
          where: { email: emailLog },
        });
        const { id } = admin;
        const timeExpire = 24 * 60 * 60 * 1000 // 24 horas
        const token = jwt.sign({ id: id }, process.env.JWT_SECRET, {
          expiresIn: timeExpire
        });
        console.log(`token: ${token} for: ${admin.name} ${admin.lastname}`);
        const cookiesOptions = {
          expires: new Date(Date.now() + timeExpire), 
          httpOnly: true,
        };
        res.cookie("jwt", token, cookiesOptions);
        res.status(200).json({
<<<<<<< HEAD
          message: "Succesful Login",
          info: admin,
=======
          message: "Successful Login",
          info: loggedAdmin,
>>>>>>> develop
        });
      
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