const { admins: ModelAdmin } = require("../database/models/index");

const getAllAdmins = async (req, res) => {
  try {
    const profilesAdmin = await ModelAdmin.findAll();
    !profilesAdmin ?
      res.status(400).json({ message: 'Profiles not found' })
      :
      res.json({ message: 'Successful', info: profilesAdmin });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Somthing went wrong' });
  }
};

const getAdmin = async (req, res) => {
  try {
    const profileAdmin = await ModelAdmin.findOne({
      where: { id: req.params.id },
    });
    !profileAdmin ?
      res.status(400).json({ message: 'Profile not found' })
      :
      res.json({ message: 'Successful', info: profileAdmin });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Somthing went wrong' });
  }
};

module.exports = {
  getAdmin,
  getAllAdmins,
};
