import { z } from "zod";

export const signupSchema = z.object({
  name: z
    .string({
      required_error: "El nombre es requerido",
      invalid_type_error: "El nombre debe ser texto",
    })
    .min(3, { message: "El nombre debe tener al menos 3 caracteres" })
    .max(255, { message: "El nombre debe tener menos de 255 caracteres" }),
  email: z
    .string({
      required_error: "El email es requerido",
      invalid_type_error: "El email debe ser texto",
    })
    .email({ message: "El email debe ser valido" })
    .max(255, { message: "El email debe tener menos de 255 caracteres" }),
  password: z
    .string({
      required_error: "La contraseña es requerida",
      invalid_type_error: "La contraseña debe ser texto",
    })
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres" })
    .max(255, { message: "La contraseña debe tener menos de 255 caracteres" }),
});

export const signinSchema = z.object({
  email: z
    .string({
      required_error: "El email es requerido",
      invalid_type_error: "El email debe ser texto",
    })
    .email({ message: "El email debe ser valido" })
    .max(255, { message: "El email debe tener menos de 255 caracteres" }),
  password: z
    .string({
      required_error: "La contraseña es requerida",
      invalid_type_error: "La contraseña debe ser texto",
    })
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres" })
    .max(255, { message: "La contraseña debe tener menos de 255 caracteres" }),
});
