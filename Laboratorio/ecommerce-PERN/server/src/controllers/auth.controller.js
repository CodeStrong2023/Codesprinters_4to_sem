import pool from "../db.js";
import bcrypt from "bcrypt";
import { createToken } from "../libs/jwt.js";
export const signup = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const result = await pool.query(
      "INSERT INTO usuarios (nombre,email,password) VALUES ($1,$2,$3) RETURNING *",
      [nombre, email, hash]
    );
    const token = await createToken({ id: result.rows[0].id });
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "none",
      maxAge: 1000 * 60 * 60 * 24,
    });
    res.json({ message: "Usuario registrado con exito", token });
  } catch (error) {
    if (error.code === "23505") {
      return res
        .status(400)
        .json({ message: "Ya existe un usuario con ese email" });
    }
    console.log(error);
    res.status(500).json({ message: "Error al registrar el usuario" });
  }
};
