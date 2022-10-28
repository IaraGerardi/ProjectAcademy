const jwt = require("jsonwebtoken");
const { admins: ModelAdmin } = require("../database/models/index");

const adminLogin = async (req, res) => {
  try {
    const { emailLog } = req.body
        const admin = await ModelAdmin.findOne({
          where: { email: emailLog },
        });
        console.log(req.headers.authorization);
        const payload = {
          id: admin.id
        }
        const timeExpire = 24 * 60 * 60 * 1000 // 24 horas
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: timeExpire
        });
        /* console.log(`token: ${token} for: ${admin.name} ${admin.lastname}`);
        const cookiesOptions = {
          expires: new Date(Date.now() + timeExpire), 
          httpOnly: true,
        };
        res.cookie("jwt", token, cookiesOptions); */
        res.status(200).json({
          message: "Succesful Login",
          info: admin,
          token
        });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Something went wrong' });
  }
};

const logout = (req, res) => {
  try {
    res.status(200).clearCookie("jwt").json({ message: "Cookie cleared"});
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Something went wrong' });
  }
};

module.exports = {
  adminLogin,
  logout
}