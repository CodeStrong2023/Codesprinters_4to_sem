CREATE TABLE tareas (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(100) UNIQUE NOT NULL,
    descripcion TEXT,
);

