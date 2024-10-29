import pool from "../db.js";
import bcrypt from "bcrypt";
import { createToken } from "../libs/jwt.js";
import md5 from "md5";
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const gravatar = `https://www.gravatar.com/avatar/${md5(email)}`;
    const result = await pool.query(
      "INSERT INTO usuarios (nombre,email,password,gravatar) VALUES ($1,$2,$3,$4) RETURNING *",
      [name, email, hash, gravatar]
    );
    const token = await createToken({ id: result.rows[0].id });
    res.cookie("token", token, {
      //httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 1000 * 60 * 60 * 24,
    });
    res.json({
      message: "Usuario registrado con exito",
      token,
      user: result.rows[0],
    });
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

export const signin = async (req, res) => {
  const { email, password } = req.body;
  const result = await pool.query("SELECT * FROM usuarios WHERE email = $1", [
    email,
  ]);
  if (result.rows.length === 0) {
    return res.status(400).json({ message: "Usuario no encontrado" });
  }
  const user = result.rows[0];
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return res.status(400).json({ message: "Contraseña incorrecta" });
  }
  const token = await createToken({ id: user.id });
  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 1000 * 60 * 60 * 24,
  });
  return res.json({ message: "Bienvenido", user, token });
};

export const signout = async (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Hasta luego" });
};

export const profile = async (req, res) => {
  const result = await pool.query(
    "SELECT id,nombre,email FROM usuarios WHERE id = $1",
    [req.userId]
  );
  res.json(result.rows[0]);
};
