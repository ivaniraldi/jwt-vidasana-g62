import pool from "../config/db.js";

const getEventos = async () => {
    const { rows: eventos } = await pool.query("SELECT * FROM eventos");
    return eventos;
}

const getEvento = async (id) => {
    const { rows: evento } = await pool.query("SELECT * FROM eventos WHERE id = " + id);
    return evento;
}

const deleteEvento = async (id) => {
    const consulta = "DELETE FROM eventos WHERE id = $1";
    const values = [id];
    const { rowCount } = await pool.query(consulta, values);
    if (!rowCount) throw { code: 404, message: "No se encontró ningún evento con este ID" };
}

const actualizarEvento = async (id, payload) => {
    const { titulo, descripcion, fecha, lugar } = payload;
    const consulta = "UPDATE eventos SET titulo = $1, descripcion = $2, fecha = $3, lugar = $4 WHERE id = $5";
    const values = [titulo, descripcion, fecha, lugar, id];
    await pool.query(consulta, values);
};

export const eventsModels = {
    getEventos,
    deleteEvento,
    actualizarEvento,
    getEvento
};
