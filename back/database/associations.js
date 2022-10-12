const ModelOriented = require("./models/ModelOriented");
const ModelCounselor = require("./models/ModelCounselor");
const ModelEvent = require("./models/ModelEvent");
const ModelOrientedEvent = require("./models/ModelOrientedEvent");

//1 a N / Orientadores a Orientados
ModelCounselor.hasMany(ModelOriented); //Crea FK OrientadoreId para los orientados
ModelOriented.belongsTo(ModelCounselor);//Cada orientado tiene el ID de su unico orientador

//1 a N / Orientador a Eventos
ModelCounselor.hasMany(ModelEvent); //Crea FK OrientadoreId para los Eventos
ModelEvent.belongsTo(ModelCounselor); //Cada Evento tiene el ID del unico orientador

//N a N / Orientados a Eventos
ModelOriented.belongsToMany(ModelEvent, {through: "oriented_event"}); // Tabla pivot llamada "orientado_evento", relacion tabla orientado y tabla Evento
ModelEvent.belongsToMany(ModelOriented, {through: "oriented_event"});

module.exports = {
    ModelOriented,
    ModelCounselor,
    ModelEvent,
    ModelOrientedEvent
}