package utn.estudiantes.repositorio;
import org.springframework.data.jpa.repository.JpaRepository;

import utn.estudiantes.modelo.estudiantes2024;
// Esta interfaz agrega muchas funciones a nuestra app-Simplifica la configuracion 
public interface EstudianteRepositorio extends JpaRepository<estudiantes2024,Integer> {
}