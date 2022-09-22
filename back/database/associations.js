const ModelOrientado = require("./models/ModelOrientado");
const ModelOrientador = require("./models/ModelOrientador");
const ModelEvento = require("./models/ModelEvento.js");

ModelOrientador.hasMany(ModelOrientado); //Crea FK OrientadoreId para los orientados
ModelOrientado.belongsTo(ModelOrientador);//Cada orientado tiene el ID de su unico orientador

ModelOrientador.hasMany(ModelEvento); //Crea FK orientadoreId para los orientados
ModelEvento.belongsTo(ModelOrientador);//Cada evento tiene el ID de su unico orientador

module.exports = {
    ModelOrientado,
    ModelOrientador,
    ModelEvento
}