const ModelOrientado = require("./models/ModelOrientado");
const ModelOrientador = require("./models/ModelOrientador");
const ModelEvento = require("./models/ModelEvento.js");

//1 a N / Orientadores a Orientados
ModelOrientador.hasMany(ModelOrientado); //Crea FK OrientadoreId para los orientados
ModelOrientado.belongsTo(ModelOrientador);//Cada orientado tiene el ID de su unico orientador

//1 a N / Orientador a Eventos
ModelOrientador.hasMany(ModelEvento); //Crea FK OrientadoreId para los Eventos
ModelEvento.belongsTo(ModelOrientador); //Cada Evento tiene el ID del unico orientador

//N a N / Orientados a Eventos
ModelOrientado.belongsToMany(ModelEvento, {through: "orientado_evento"}); // Tabla pivot llamada "orientado_evento", relacion tabla orientado y tabla Evento
ModelEvento.belongsToMany(ModelOrientado, {through: "orientado_evento"});

module.exports = {
    ModelOrientado,
    ModelOrientador,
    ModelEvento
}