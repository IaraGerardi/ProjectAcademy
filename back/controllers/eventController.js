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
        res.status(200).json(event) 
    } catch (error) {
        console.log(error)
        res.status(400).json({message: error.message});
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
        res.status(200).json({
            message: "Event deleted succesfully"
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({message: error.message});
    }
}

//Obtiene todos los Events, con su orientdor y todos los oriented que asistiran
const getEvents = async (res) => {
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
        res.status(200).json(event)
    } catch (error) {
        console.log(error)
        res.status(400).json({message: error.message});
    }
}

module.exports = {
    createEvent,
    deleteEvent,
    getEvents
}