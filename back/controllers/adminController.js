const { admins: ModelAdmin } = require("../database/models/index");

const getAllAdmins = async (req, res) => {
  try {
    const profilesAdmin = await ModelAdmin.findAll();
    !profilesAdmin ?
      res.status(204).json({ message: 'Admins not found' })
      :
      res.status(200).json({ message: 'Successful', info: profilesAdmin });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Somthing went wrong' });
  }
};

const getAdmin = async (req, res) => {
  try {
    const profileAdmin = await ModelAdmin.findOne({
      where: { id: req.params.id },
    });
    !profileAdmin ?
      res.status(204).json({ message: 'Profile not found' })
      :
      res.status(200).json({ message: 'Successful', info: profileAdmin });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Somthing went wrong' });
  }
};

module.exports = {
  getAdmin,
  getAllAdmins,
};
