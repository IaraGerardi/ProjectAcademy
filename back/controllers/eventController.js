const { ModelEvent, ModelOrientedEvent, ModelOriented, ModelCounselor } = require("../database/associations");

//Metodo para crear un Event
const createEvent = async (req, res) => { //Se crea la constante del metodo que luego se utilizara en las routes. 
    const {nameEvent, dateEvent, timeEvent, durationEvent, descriptionEvent, counselorEvent, orientedEvent} = req.body; //Capturamos los inputs y los guardamos en una variable
    try {  //Se utiliza un try{} catch(error){} para poder detectar errores y visualizarlos
        const event = await ModelEvent.create({ //Traemos el modelo de la tabla Events con "ModelEvent" y usamos el metodo de Sequelize .create y pasamos las variables donde guardamos la informacion de los inputs a la columna correspondiente.
            name: nameEvent,
            date: dateEvent,
            time: timeEvent,
            duration: durationEvent,
            description: descriptionEvent,
            CounselorId: counselorEvent //Ya que el counselor se obtiene atraves de un objeto con el nombre y el id del counselor, utilizamos ".value" para acceder a la id e insertarla en el registro del Event.
        });
        for (let i = 0; i < orientedEvent.length; i++) { //Bucle for para poder agregar todos los oriented que se obtienen en un array de objetos llamado "orientedEvent" al Event que se acaba de crear.
        await ModelOrientedEvent.create({  //Esta es la tabla pivot que contiene todos los oriented que van a un solo Event.
            EventId: event.id, //Utilizamos el id de "event" que es el registro que acabamos de ingresar en la tabla de Events.
            OrientedId: orientedEvent[i].value  
        });
        } 
        console.log("Evento creado correctamente")
        res.json({event: event}) //Enviamos un .json al front con el que van a poder saber que el Event se subio correctamente y que datos se utilizaron.
    } catch (error) {
        console.log(error)
        res.json({ message: error.message }) //En caso de error enviamos el error atraves de un .json al front.
    }
}

//Metodo para eliminar Event
const deleteEvent = async (req,res) => {
    try {
        await ModelEvent.destroy({//Se utiliza el metodo ".destroy" para eliminar un registro en la tabla Events 
            where: {id: req.params.id} //con "where:" especificamos que registro queremos eliminar, en este caso todos los Events que contengan el id de req.params, osea el id que se encuentra en la url
        })
        await ModelOrientedEvent.destroy({ //Hay que eliminar dos registros de dos tablas distintas ya que al ser una relacion de muchos a muchos se genera una tabla Pivot. Este metodo exactamente elimina registros en la tabla pivot, el anterior en la tabla Events. 
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

            ], attributes: ['id', 'name', 'date', 'time', 'duration', 'description']
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