const {
  events: ModelEvent,
  counselors: ModelCounselor,
  orienteds: ModelOriented,
  oriented_event: ModelOrientedEvent,
} = require("../database/models/index");

// Metodo para crear un Event
const createEvent = async (req, res) => {
  const {
    nameEvent,
    dateEvent,
    timeEvent,
    durationEvent,
    descriptionEvent,
    counselorEvent,
    orientedEvent,
  } = req.body;
  try {
    const event = await ModelEvent.create({
      name: nameEvent,
      date: dateEvent,
      time: timeEvent,
      duration: durationEvent,
      description: descriptionEvent,
      counselorId: counselorEvent.value,
    });
    const orientedIn = orientedEvent.map(currentValue =>{
      return currentValue.value
    })
    const orientedInEvent = await ModelOriented.findAll({
      where: {
        id: orientedIn
      }
    })
    await event.addOriented(orientedInEvent, { through: ModelOrientedEvent })

    /* const orientedtoEvent = [];
    for (let i = 0; i < orientedEvent.length; i += 1) {
      orientedtoEvent.unshift({
        eventId: event.id,
        orientedId: orientedEvent[i].value,
      });
    }
    await ModelOrientedEvent.bulkCreate(orientedtoEvent); */
    res.json({ message: "Event created" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Somthing went wrong' });
  }
};

// Metodo para eliminar Event
const deleteEvent = async (req, res) => {
  try {
    const eventDelete = await ModelEvent.destroy({
      where: { id: req.params.id },
    });
    eventDelete < 1 ?
      res.status(400).json({ message: 'Event not found' })
      :
      res.json({
        message: "Event deleted succesfully",
      });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Something went wrong' });
  }
};

// Obtiene todos los Events, con su orientdor y todos los oriented que asistiran
const getEvents = async (req, res) => {
  try {
    const event = await ModelEvent.findAll({
      include: [
        {
          model: ModelOriented,
          attributes: ["id", "name", "lastname", "photoProfile"]
        }
      ],
      attributes: {
        exclude: ["deletedAt"]
      }
    });
    !event ?
    res.status(400).json({message: 'Events not found'})
    :
    res.json({message: 'Successful', info: event});
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Something went wrong' });
  }
};

// Obtiene un solo evento, junto con el orientador y los orientados que asistiran
const getEventById = async (req, res) => {
  try {
    console.log("estamo aca")
    const event = await ModelEvent.findOne({
      include: [
        {
          model: ModelOriented,
          attributes: ["id", "name", "lastname", "photoProfile"]
        }
      ],
      attributes: {
        exclude: ["deletedAt","updatedAt"],
      },
      where: {
        id: req.params.id
      }
    });
    !event ?
    res.status(400).json({message: 'Events not found'})
    :
    res.json({message: 'Successful', info: event});
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Something went wrong' });
  }
};

module.exports = {
  createEvent,
  deleteEvent,
  getEvents,
  getEventById
};