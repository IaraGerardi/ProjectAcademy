const {news: ModelNews} = require("../database/models");


const getAllNews = async (req, res) => {
    try {
        const news = await ModelNews.findAll();
        res.status(200).json(news)
    } catch (error) {
        console.log(error)
        res.status(400).json({message: error.message});
    }
}

module.exports = {
    getAllNews
}