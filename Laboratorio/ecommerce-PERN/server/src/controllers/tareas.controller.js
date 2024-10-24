import pool from "../db.js";

export const listarTareas = async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM tareas");
    res.json(result.rows);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
export const crearTarea = async (req, res) => {
  const { titulo, descripcion } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO tareas (titulo,descripcion) VALUES ($1,$2) RETURNING *",
      [titulo, descripcion]
    );

    res.json({ message: "Tarea creada", result: result.rows });
    console.log("resultado", result);
  } catch (error) {
    if (error.code === "23505") {
      return res
        .status(400)
        .json({ message: "Ya existe una tarea con ese titulo" });
    }
    console.log(error);
    next(error);
  }
};
export const obtenerTarea = async (req, res) => {
  const { id } = req.params;
  const result = await pool.query("SELECT * FROM tareas WHERE id = $1", [id]);
  res.json(result.rows);
};

export const guardarTarea = (req, res) => {
  res.json({ message: "Tarea guardada" });
};

export const actualizarTarea = async (req, res) => {
  const { titulo, descripcion } = req.body;
  const { id } = req.params;
  const result = await pool.query(
    "UPDATE tareas SET titulo = $1, descripcion = $2 WHERE id = $3",
    [titulo, descripcion, id]
  );
  return res.json({ message: `Tarea ${id} actualizada`, result: result.rows });
};

export const eliminarTarea = async (req, res) => {
  const { id } = req.params;
  const result = await pool.query("DELETE FROM tareas WHERE id = $1", [id]);
  res.json({ message: `Tarea ${id} eliminada`, result: result.rows });
};
