const ModelAdmin = require("../database/models/ModelAdmin");

const getAllAdmins = async(res) => {
    try {
        const profilesAdmin = await ModelAdmin.findAll({
        });
        res.status(200).json(profilesAdmin)
    } catch (error) {
        console.log(error)
        res.status(400).json({message: error.message});
    }
}

const getAdmin = async(req, res) => {
    try {
        const profileAdmin = await ModelAdmin.findOne({
            where: {id: req.params.id}
        });
        res.status(200).json(profileAdmin);
    } catch (error) {
        console.log(error)
        res.status(400).json({message: error.message});
    }
}

module.exports = {
    getAdmin,
    getAllAdmins
}