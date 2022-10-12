const { ModelCounselor } = require("../database/associations");

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