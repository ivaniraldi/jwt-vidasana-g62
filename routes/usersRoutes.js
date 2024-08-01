import express from 'express';
import { userControllers } from '../controllers/usersController.js';
const router = express.Router();

router.post('/login', userControllers.login);
router.post('/usuarios', userControllers.register);


export default router