const ModelOrientado = require("./models/ModelOrientado");
const ModelOrientador = require("./models/ModelOrientador");

ModelOrientador.hasMany(ModelOrientado); //Crea FK OrientadorId para los orientados
ModelOrientado.belongsTo(ModelOrientador);//Cada orientado tiene el ID de su unico orientador

module.exports = {
    ModelOrientado,
    ModelOrientador
}