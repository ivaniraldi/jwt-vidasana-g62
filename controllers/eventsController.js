import { eventsModels } from "../models/eventsModels.js";
import jwt from 'jsonwebtoken';

const sendEventos = async (req, res) => {
    try {
        const eventos = await eventsModels.getEventos();
        res.json(eventos);
    } catch (error) {
        res.status(error.code || 500).send(error);
    }
}

const sendEvento = async (req, res) => {
    try {
        const { id } = req.params;
        const evento = await eventsModels.getEvento(id)
        res.json(evento)
    } catch (err) {
        console.log(err)
    }
}

const updateEvent= async (req, res) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        const Authorization = req.header("Authorization");
        const token = Authorization.split("Bearer ")[1];
        jwt.verify(token, "az_AZ");
        const { email } = jwt.decode(token);
        await eventsModels.actualizarEvento(id, payload);
        res.send(`El usuario ${email} ha actualizado el evento de id ${id}`);
    } catch (error) {
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).send({ message: error.message });
        }
        res.status(500).send(error);
    }
}

const deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const Authorization = req.header("Authorization");
        const token = Authorization.split("Bearer ")[1];
        // Verificar y decodificar el token
        jwt.verify(token, "az_AZ");

        await eventsModels.deleteEvento(id);
        
        const eventos = await eventsModels.getEventos();
        res.json(eventos);
    } catch (error) {
        res.status(error.code || 500).send(error);
    }
}

export const eventsController = {
    sendEventos,
    deleteEvent,
    updateEvent,
    sendEvento
};
