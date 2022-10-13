const {news: ModelNews} = require("../database/models");


const getAllNews = async (res) => {
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