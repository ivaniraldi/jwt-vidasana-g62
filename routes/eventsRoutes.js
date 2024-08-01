import express from 'express';
import { eventsController } from '../controllers/eventsController.js';
const router = express.Router();

router.get('/eventos', eventsController.sendEventos);
router.delete('/eventos/:id', eventsController.deleteEvent);
router.put('/eventos/:id', eventsController.updateEvent);

export default router;
