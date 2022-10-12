const { ModelEvent, ModelOrientedEvent, ModelOriented, ModelCounselor } = require("../database/associations");

//Metodo para crear un Event
const createEvent = async (req, res) => { 
    const {nameEvent, dateEvent, timeEvent, durationEvent, descriptionEvent, counselorEvent, orientedEvent} = req.body; 
    try {  
        const event = await ModelEvent.create({ 
            name: nameEvent,
            date: dateEvent,
            time: timeEvent,
            duration: durationEvent,
            description: descriptionEvent,
            CounselorId: counselorEvent.value 
        });
        for (let i = 0; i < orientedEvent.length; i++) { 
        await ModelOrientedEvent.create({  
            EventId: event.id,
            OrientedId: orientedEvent[i].value
        });
        } 
        res.json({event: event}) 
    } catch (error) {
        console.log(error)
        res.json({ message: error.message }) 
    }
}

//Metodo para eliminar Event
const deleteEvent = async (req,res) => {
    try {
        await ModelEvent.destroy({
            where: {id: req.params.id} 
        })
        await ModelOrientedEvent.destroy({ 
            where: {EventId: req.params.id}    
        })
        res.json({
            "message": "Event eliminado correctamente"
        })
    } catch (error) {
        res.json ({message:error.message})
    }
}

//Obtiene todos los Events, con su orientdor y todos los oriented que asistiran
const getEvents = async (req, res) => {
    try {
        const event = await ModelEvent.findAll({
            include: [
                {
                    model: ModelCounselor
                },
                {
                    model: ModelOriented,
                    attributes: [ 'name', 'lastname','photoProfile']
                }

            ], attributes: ['id', 'name', 'date', 'time', 'duration', 'description', 'createdAt']
        });
        res.json(event)
    } catch (error) {
        res.json({ message: error.message })
    }
}

module.exports = {
    createEvent,
    deleteEvent,
    getEvents
}