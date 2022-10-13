const { ModelCounselor } = require("../database/models/index");

const getAllCounselor = async (res) => {
    try {    
        const counselor = await ModelCounselor.findAll();
        res.status(200).json(counselor)
    } catch (error) {
    console.log(error)
    res.status(400).json({message: error.message});
}
}

module.exports = {
    getAllCounselor
}