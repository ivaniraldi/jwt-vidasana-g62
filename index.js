import express from "express";
import eventsRouter from "./routes/eventsRoutes.js";
import usersRouter from "./routes/usersRoutes.js";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/", eventsRouter);
app.use("/", usersRouter);

app.listen(PORT, console.log("SERVER ON"));
