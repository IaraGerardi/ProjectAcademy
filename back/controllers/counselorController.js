const { ModelCounselor } = require("../database/associations");

const getAllCounselor = async (req, res) => {
    const counselor = await ModelCounselor.findAll();
    res.json(counselor)
}

module.exports = {
    getAllCounselor
}