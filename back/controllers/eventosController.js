const { ModelEvento, ModelOrientadoEvento, ModelOrientado, ModelOrientador } = require("../database/associations");

const createEvento = async (req, res) => {
    const { nameEvent, dateEvent, timeEvent, durationEvent, descriptionEvent, orientadorEvent, orientadosEvent } = req.body;
    try {
        const event = await ModelEvento.create({
            name: nameEvent,
            date: dateEvent,
            time: timeEvent,
            duration: durationEvent,
            description: descriptionEvent,
            OrientadoreId: orientadorEvent.value
        });
        for (let i = 0; i < orientadosEvent.length; i++) {
            await ModelOrientadoEvento.create({
                EventoId: event.id,
                OrientadoId: orientadosEvent[i].value
            });
        }
        console.log("Evento creado correctamente")
        res.json({ event: event })
    } catch (error) {
        console.log(error)
        res.json({ message: error.message })
    }
}

//Obtiene todos los eventos, con su orientdor y todos los orientados que asistiran
const getEvent = async (req, res) => {
    try {
        const event = await ModelEvento.findAll({
            include: [
                {
                    model: ModelOrientador
                },
                {
                    model: ModelOrientado,
                    attributes: [ 'name', 'lastname','photoProfile']
                }

            ], attributes: ['id', 'name', 'date', 'time', 'duration', 'description']
        });
        res.json(event)
    } catch (error) {
        res.json({ message: error.message })
    }
}

module.exports = {
    createEvento,
    getEvent
}