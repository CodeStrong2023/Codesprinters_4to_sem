import Router from "express-promise-router";
import {
  actualizarTarea,
  listarTareas,
  obtenerTarea,
  crearTarea,
  eliminarTarea,
} from "../controllers/tareas.controller.js";
import { isAuth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validate.middleware.js";
import { createTareasSchema } from "../schemas/tareas.schemas.js";

const router = Router();

router.get("/tareas", isAuth, listarTareas);

router.get("/tareas/:id", isAuth, obtenerTarea);

router.post("/tareas", isAuth, validateSchema(createTareasSchema), crearTarea);

router.put("/tareas/:id", isAuth, actualizarTarea);

router.delete("/tareas/:id", isAuth, eliminarTarea);

export default router;
