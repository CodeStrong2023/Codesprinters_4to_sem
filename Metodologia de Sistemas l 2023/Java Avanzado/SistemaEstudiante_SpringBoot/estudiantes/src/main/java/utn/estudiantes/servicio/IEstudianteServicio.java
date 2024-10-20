package utn.estudiantes.servicio;
import java.util.List;

import utn.estudiantes.modelo.estudiantes2024;
public interface IEstudianteServicio {
    public List<estudiantes2024> listarEstudiantes();
    public estudiantes2024 buscarEstudiantePorID(Integer idestudiantes2024);
    public void guardarEstudiante(estudiantes2024 estudiante);
    public void eliminarEstudiante(estudiantes2024 estudiante);
}