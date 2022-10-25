const { counselors: ModelCounselor } = require("../database/models/index");

const getAllCounselor = async (req, res) => {
  try {
    const counselor = await ModelCounselor.findAll();
    !counselor ?
      res.status(204).json({ message: 'Admins not found' })
      :
      res.status(200).json({ message: 'Succefully', info: counselor });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Somthing went wrong' });
  }
};

module.exports = {
  getAllCounselor,
};
