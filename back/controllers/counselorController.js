const { counselors : ModelCounselor} = require('../database/models/index')

const getAllCounselor = async (req, res) => {
    const counselor = await ModelCounselor.findAll();
    res.json(counselor)
}

module.exports = {
    getAllCounselor
}