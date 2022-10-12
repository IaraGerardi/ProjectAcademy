//Dependencias que vamos a utilizar
const multer = require("multer")
const path = require("path")

//Storage - Definimos donde y bajo que nombre se guarda
const storage = multer.diskStorage({//Configuraciones. Como almaneca las imagenes
    destination: (req, file, cb) => { // Es un callback que dice donde va a guardar el archivo
        cb(null, path.join(__dirname, '../../front/src/img-back/orientados'))
    },
    filename: (req, file, cb) => {
        const unique = (`${Date.now()}-${Math.round(Math.random() * 1E5)}`) //toma la fecha del día y le agrega un numero random
        cb(null, `${file.fieldname}-${unique}${path.extname(file.originalname)}`)//Fieldname:Nombre de la columna usada en DB/originalname: Nombre del file/ extname: Formato del archivo
    },//null define que no nos va a pasar error en caso de que lo haya
})

//Definimos los limites de peso y formatos. Devolvemos errores si algo no está bien.
const upload = multer({
    storage,
    limits: {       
        fileSize: 10485760, // 10 Mb
    },
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|gif/
        const mimetype = filetypes.test(file.mimetype); //.test() nos comprueba si coinciden los valores que damos como parametros con el del archivo a subir
        const extname = filetypes.test(path.extname(file.originalname)); //A lo de arriba le sumamos path.extname(f.o) Toma el nombre original del archivo y captura la extensión de este para comprobar coincidencias
        if(mimetype && extname){ //Si dan true ambas, los errores serán "null" y "true" para que continue
            return cb(null, true)
        }
        cb('Error: Verifique el formato que desea subir')//Sino sucede el if de arriba enviamo un error
    }, 
}).single('photoProfile'); //Permite subir 1 sola foto(req.file en vez de req.files[0]). Además pasamos el nombre del input utilizado


const photoProfileCheck = (req, res, next) => {
    upload(req, res, err => {
        if(err){
            return res.json(err);
        }
        /* res.json('La imagen fue subida exitosamente'); */ //Si todo sale bien.
        next() //Una vez que todo salió bien, continua con el resto de código(Ej: crearOrientador)
    });
}

module.exports = photoProfileCheck