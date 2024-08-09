import request from "supertest";
import { app } from "../index.js";

describe("Operaciones CRUD", () => {
  it("Obteniendo un 200 de un GET", async () => {
    const response = await request(app).get("/eventos");
    expect(response.statusCode).toBe(200);
  });
  it("Obteniendo un evento", async () => {
    const { body } = await request(app).get("/eventos/1").send();
    const evento = body;
    expect(evento).toBeInstanceOf(Object);
    });
    it("Eliminando un producto", async () => {
        const jwt = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsZ29AZW1haWwuY29tIiwiaWF0IjoxNzIyNTU3OTE3fQ.cZ-n2YR3K4xfK2xyXPf7PZ9B1i1fIZ3La0SZFCrzCKM";
        const idEvento = 3
        const { body: eventos } = await request(app)
        .delete(`/eventos/${idEvento}`)
        .set("Authorization", jwt)
        .send();
        const ids = eventos.map(p => p.id)
        expect(ids).not.toContain(idEvento);
        });
});
