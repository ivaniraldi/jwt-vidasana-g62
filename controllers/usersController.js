import { userModels } from "../models/userModels.js";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
    try {
        const usuario = req.body;
        await userModels.registrarUsuario(usuario);
        res.send("Usuario creado con éxito");
    } catch (error) {
        res.status(500).send(error);
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        await userModels.verificarCredenciales(email, password);
        const token = jwt.sign({ email }, "az_AZ");
        res.send(token);
    } catch (error) {
        console.log(error);
        res.status(error.code || 500).send(error);
    }
}

export const userControllers = {
    login,
    register
}