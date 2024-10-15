import { Router } from "express";
import {
  actualizarTarea,
  listarTareas,
  guardarTarea,
  obtenerTarea,
} from "../controllers/tareas.controller.js";
const router = Router();

router.get("/tareas", listarTareas);

router.get("/tareas/:id", obtenerTarea);

router.post("/tareas", guardarTarea);

router.put("/tareas/:id", actualizarTarea);

router.delete("/tareas/:id", actualizarTarea);

export default router;
