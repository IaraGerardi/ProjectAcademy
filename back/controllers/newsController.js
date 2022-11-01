const { news: ModelNews } = require("../database/models");

const getAllNews = async (req, res) => {
  try {
    const news = await ModelNews.findAll();
    res.json({ message: 'Successful', info: news});
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Something went wrong' });
  }
};

module.exports = {
  getAllNews,
};
