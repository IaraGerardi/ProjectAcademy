const path = require("path");
const fs = require("fs")

const getOrientedImages = async (req, res) => {
    try {
        const imageDirection = path.join(__dirname, '..','public','img','oriented',req.params.fileid);
        fs.readFile(imageDirection, function(err){
            if(err) {
            res.status(400).json({ message: 'Something went wrong' });
            } 
            res.sendFile(imageDirection)
        });
    } catch (error){
        console.error(error)
        res.status(400).json({ message: 'Something went wrong' });
    }
  };
  
  module.exports = {
    getOrientedImages,
  };