import { getEvents, getById , createEvents, updateEvents, deleteEvents } from "../data/events/index.js";

const getEvent = async (req, res, next) => {
      try {
          const events = await getEvents();
          res.status(200).send(events);
      } catch (error) {
          console.log(error)
          res.status(400).send(error.message)
      }
}

const getEventById = async(req, res, next) => {
     try {
        const id = req.params.id;
        const oneEvent = await getById(id);
        res.status(200).send(oneEvent);
     } catch (error) {
          res.status(500).send(error.message)
     }
}
const addEvent = async (req, res, next) => {
     try {
          const data = req.body;
          const created = await createEvents(data);
          res.status(201).send(created)
     } catch (error) {
          res.status(500).send(error.message)
     }
}
const updateEvent = async (req, res, next)  => {
     try {
          const id = req.params.id;
          const data = req.body;
          const updated = await updateEvents(id, data);
          res.send(updated)
          return 'successful'
     } catch (error) {
          res.status(500).send(err.message)
     }
}
const deleteEvent = async (req, res, next) => {
     try {
        const id  = req.params.id;
        const deletedEvent = await deleteEvents(id);  
        res.send(deletedEvent)
     } catch (error) {
          res.status(500).send(error.message)
     }
} 
export {getEvent, getEventById, addEvent, updateEvent, deleteEvent}