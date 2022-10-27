const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const { orienteds: ModelOriented } = require("../database/models/index");

exports.orientedLogin = async (req, res) => {
  try {
    const { emailLog } = req.body;
    const { passwordLog } = req.body;
    if (!emailLog || !passwordLog) {
      res.status(403).json({
        message: "Incorrect data",
      });
    }else {
      const oriented = await ModelOriented.scope("withPassword").findOne({
        where: { email: emailLog },
      });
      if (!oriented || !await bcryptjs.compare(passwordLog, oriented.password)) {
        res.json({
          message: "Incorrect data",
        });
      }else {
        const loggedOriented = await ModelOriented.findOne({
          where: { email: emailLog },
        });
        const { id } = oriented;
        const token = jwt.sign({ id: id }, process.env.JWT_SECRET, {
          expiresIn: 24 * 60 * 60 * 1000,
        });
        console.log(`token: ${token} for user : ${oriented.name}`);
        const cookiesOptions = {
          expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // La cookie expira en 24 horas
          httpOnly: true,
        };
        res.cookie("jwt", token, cookiesOptions);
        res.status(200).json({
          message: "Successful Login",
          info: loggedOriented,
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Something went wrong' });
  }
};
