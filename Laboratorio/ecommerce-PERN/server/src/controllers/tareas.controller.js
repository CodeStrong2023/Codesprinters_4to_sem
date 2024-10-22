export const listarTareas = (req, res) => {
  res.json({ message: "Hello, world!" });
};

export const obtenerTarea = (req, res) => {
  const { id } = req.params;
  res.json({ message: `Tarea ${id}` });
};

export const guardarTarea = (req, res) => {
  res.json({ message: "Tarea guardada" });
};

export const actualizarTarea = (req, res) => {
  const { id } = req.params;
  res.json({ message: `Tarea ${id} actualizada` });
};
