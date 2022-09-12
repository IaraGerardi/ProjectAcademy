const ModelAdmin = require("../database/models/ModelAdmin");

const getAllAdminsProfiles = async(req, res) => {
    try {
        const profilesAdmin = await ModelAdmin.findAll();

        res.json(profilesAdmin)
    } catch (error) {
        res.json({message: error.message});
    }
}

const getAdminProfile = async(req, res) => {
    try {
        const profileAdmin = await ModelAdmin.findOne({
            where: {id: req.params.id}
        });
        res.json(profileAdmin);
    } catch (error) {
        res.json({message: error.message});
    }
}

module.exports = {
    getAdminProfile,
    getAllAdminsProfiles
}