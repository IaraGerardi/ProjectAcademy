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
    const orientedtoEvent = [];
    for (let i = 0; i < orientedEvent.length; i += 1) {
      orientedtoEvent.unshift({
        eventId: event.id,
        orientedId: orientedEvent[i].value,
      });
    }
    await ModelOrientedEvent.bulkCreate(orientedtoEvent);
    res.status(200).json({ message: "Event created succesfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Somthing went wrong' });
  }
};

// Metodo para eliminar Event
const deleteEvent = async (req, res) => {
  try {
    const eventDelete = await ModelEvent.destroy({
      where: { id: req.params.id },
    });
    await ModelOrientedEvent.destroy({
      where: { EventId: req.params.id },
    });
    eventDelete < 1 ?
      res.status(400).json({ message: 'Event not found' })
      :
      res.status(200).json({
        message: "Event deleted succesfully",
      });
  } catch (error) {
    console.log(error);
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
      attributes: [
        "id",
        "name",
        "date",
        "time",
        "duration",
        "description",
        "createdAt",
        "counselorId"
      ]
    });
    res.status(200).json(event);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Something went wrong' });
  }
};

module.exports = {
  createEvent,
  deleteEvent,
  getEvents,
};