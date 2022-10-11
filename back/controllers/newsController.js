const ModelNews = require("../database/models/ModelNews.js");


const getAllNews = async (req, res) => {
    try {
        const news = await ModelNews.findAll();
        res.json(news)
    } catch (error) {
        res.json({message: error.message})
    }
}

module.exports = {
    getAllNews
}