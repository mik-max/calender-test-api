import express from 'express';
import { getEvent, getEventById, addEvent, updateEvent, deleteEvent } from '../controllers/eventController.js';
import { Router } from 'express';
let router = Router();
router.get('/events', getEvent)
router.get('/events/:id', getEventById)
router.post('/events', addEvent)
router.put('/events/:id', updateEvent)
router.delete('/events/:id', deleteEvent)
export default router;

 
