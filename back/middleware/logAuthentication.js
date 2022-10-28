const jwt = require("jsonwebtoken");

// eslint-disable-next-line consistent-return
const isAuthenticated = async (req, res, next) => {
  try {
    const infoToken = req.headers['authorization'] //|| req.headers['x-access-token']
    const token = infoToken.split(' ') 

    jwt.verify(token[1], process.env.JWT_SECRET, (error, decoded) => {
      !error ? 
        next()
        :
        res.json({ message: 'Access denied, invalid token' })
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Not logged' });
  }
};

module.exports = {
  isAuthenticated
}