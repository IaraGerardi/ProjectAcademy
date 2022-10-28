const { counselors: ModelCounselor } = require("../database/models/index");

const getAllCounselor = async (req, res) => {
  try {
    const counselor = await ModelCounselor.findAll();
    !counselor ?
      res.status(400).json({ message: 'Counselors not found' })
      :
      res.json({ message: 'Successful', info: counselor });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Somthing went wrong' });
  }
};

module.exports = {
  getAllCounselor,
};
