import { z } from "zod";

export const createTareasSchema = z.object({
  titulo: z
    .string({
      required_error: "El titulo es requerido",
      invalid_type_error: "El titulo debe ser texto",
    })
    .min(3, { message: "El titulo debe tener al menos 3 caracteres" })
    .max(255, { message: "El titulo debe tener menos de 255 caracteres" }),
  descripcion: z
    .string({
      required_error: "La descripcion es requerida",
      invalid_type_error: "La descripcion debe ser texto",
    })
    .min(3, { message: "La descripcion debe tener al menos 3 caracteres" })
    .max(255, { message: "La descripcion debe tener menos de 255 caracteres" }),
});
