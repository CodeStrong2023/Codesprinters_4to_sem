-- Comenzamos con el CRUD: create(insertar), read(leer), update(actualizar), delete(eliminar)
-- listar los estudiantes (read)
SELECT * FROM estudiantes2024 order by idestudiantes2024;
-- Insertar estudiante
INSERT INTO estudiantes2024(nombre,apellido,telefono,email) VALUES ("GENA","Ferrero","2604679904","genaroenzo4@gmail.com");
-- Update (modificar)
UPDATE estudiantes2024 SET nombre="Enzo Genaro", apellido="Ferre" WHERE idestudiantes2024= 1;
-- Dedete
DELETE FROM estudiantes2024 WHERE idestudiantes2024=3;
-- Para modificar el idestudiantes2024 y comience en 1
ALTER TABLE estudiantes2024	AUTO_INCREMENT=1;


