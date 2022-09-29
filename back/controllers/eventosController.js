const { ModelEvento, ModelOrientadoEvento, ModelOrientado, ModelOrientador } = require("../database/associations");

//Metodo para crear un evento
const createEvento = async (req, res) => { //Se crea la constante del metodo que luego se utilizara en las routes. 
    const {nameEvent, dateEvent, timeEvent, durationEvent, descriptionEvent, orientadorEvent, orientadosEvent} = req.body; //Capturamos los inputs y los guardamos en una variable
    try {  //Se utiliza un try{} catch(error){} para poder detectar errores y visualizarlos
        const event = await ModelEvento.create({ //Traemos el modelo de la tabla Eventos con "ModelEvento" y usamos el metodo de Sequelize .create y pasamos las variables donde guardamos la informacion de los inputs a la columna correspondiente.
            name: nameEvent,
            date: dateEvent,
            time: timeEvent,
            duration: durationEvent,
            description: descriptionEvent,
            OrientadoreId: orientadorEvent //Ya que el orientador se obtiene atraves de un objeto con el nombre y el id del orientador, utilizamos ".value" para acceder a la id e insertarla en el registro del evento.
        });
        for (let i = 0; i < orientadosEvent.length; i++) { //Bucle for para poder agregar todos los orientados que se obtienen en un array de objetos llamado "orientadosEvent" al evento que se acaba de crear.
        await ModelOrientadoEvento.create({  //Esta es la tabla pivot que contiene todos los orientados que van a un solo evento.
            EventoId: event.id, //Utilizamos el id de "event" que es el registro que acabamos de ingresar en la tabla de Eventos.
            OrientadoId: orientadosEvent[i].value  
        });
        } 
        console.log("Evento creado correctamente")
        res.json({event: event}) //Enviamos un .json al front con el que van a poder saber que el evento se subio correctamente y que datos se utilizaron.
    } catch (error) {
        console.log(error)
        res.json({ message: error.message }) //En caso de error enviamos el error atraves de un .json al front.
    }
}

//Metodo para eliminar evento
const deleteEvento = async (req,res) => {
    try {
        await ModelEvento.destroy({//Se utiliza el metodo ".destroy" para eliminar un registro en la tabla Eventos 
            where: {id: req.params.id} //con "where:" especificamos que registro queremos eliminar, en este caso todos los eventos que contengan el id de req.params, osea el id que se encuentra en la url
        })
        await ModelOrientadoEvento.destroy({ //Hay que eliminar dos registros de dos tablas distintas ya que al ser una relacion de muchos a muchos se genera una tabla Pivot. Este metodo exactamente elimina registros en la tabla pivot, el anterior en la tabla Eventos. 
            where: {EventoId: req.params.id}    
        })
        res.json({
            "message": "evento eliminado correctamente"
        })
    } catch (error) {
        res.json ({message:error.message})
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
    deleteEvento,
    getEvent
}