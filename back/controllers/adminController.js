const { admins : ModelAdmin} = require('../database/models/index');

const getAllAdmins = async(req, res) => {
    try {
        const profilesAdmin = await ModelAdmin.findAll({
        });
        res.json(profilesAdmin)
    } catch (error) {
        res.json({message: error.message});
    }
}

const getAdmin = async(req, res) => {
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
    getAdmin,
    getAllAdmins
}