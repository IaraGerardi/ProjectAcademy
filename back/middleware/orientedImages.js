// Dependencias que vamos a utilizar
const multer = require("multer");
const path = require("path");

// Storage - Definimos donde y bajo que nombre se guarda
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../src/img-back/orientados"));
  },
  filename: (req, file, cb) => {
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e5)}`;
    cb(null, `${file.fieldname}-${unique}${path.extname(file.originalname)}`); // Fieldname:Nombre de la columna usada en DB/originalname: Nombre del file/ extname: Formato del archivo
  }, // null define que no nos va a pasar error en caso de que lo haya
});

const upload = multer({
  storage,
  limits: {
    fileSize: 10485760, // 10 Mb
  },
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const mimetype = filetypes.test(file.mimetype); // .test() nos comprueba si coinciden los valores que damos como parametros con el del archivo a subir
    const extname = filetypes.test(path.extname(file.originalname)); // path.extname(file.originalname) Toma el nombre original del archivo y captura la extensión de este para comprobar coincidencias
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb({ msg: 'Error' , info: 'Verifique el formato del archivo(jpg/png/gif/jpeg)' }); // Sino sucede el if de arriba enviamos un error
  },
}).single("photoProfile"); // Permite subir 1 sola foto(req.file en vez de req.files[0]). Además pasamos el nombre del input utilizado

const photoProfileCheck = (req, res, next) => {
  upload(req, res, (error) => {
    if (error) {
      return res.status(400).json({ msg: 'Error' , info: error.info || 'El archivo es demasiado pesado' });
    }
    next(); // Una vez que todo salió bien, continua con el resto de código(Ej: crearOrientador)
  });
};

module.exports = photoProfileCheck;