// Dependencias que vamos a utilizar
const multer = require("multer");
const path = require("path");

// Storage - Definimos donde y bajo que nombre se guarda
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Es un callback que dice donde va a guardar el archivo
    cb(null, path.join(__dirname, '..','public','img','oriented'));

  },
  filename: (req, file, cb) => {
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e5)}`;
    cb(null, `${file.fieldname}-${unique}${path.extname(file.originalname)}`); 
    }
});

const upload = multer({
  storage,
}).single("photoProfile"); 

const photoProfileCheck = (req, res, next) => {
  upload(req, res, (error) => {
    if (error) {
      return res.status(400).json({ message: "Image couldn't be uploaded" });
    }
    next(); 
    });
};

module.exports = photoProfileCheck;