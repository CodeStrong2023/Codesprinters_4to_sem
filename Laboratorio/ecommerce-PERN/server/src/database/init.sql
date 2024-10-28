CREATE TABLE tareas (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(100) UNIQUE NOT NULL,
    descripcion TEXT,
);

ALTER TABLE tareas ADD COLUMN usuario_id INTEGER REFERENCES usuarios(id);

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    fecha_registro TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE usuarios ADD COLUMN gravatar VARCHAR(100);