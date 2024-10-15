package utn.estudiantes.servicio;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import utn.estudiantes.modelo.estudiantes2024;
import utn.estudiantes.repositorio.EstudianteRepositorio;

@Service
public class EstudianteServicio implements IEstudianteServicio{
    @Autowired
    private EstudianteRepositorio estudianteRepositorio;
    //Metodo buscar estudiantePorId
    @Override
    public estudiantes2024 buscarEstudiantePorID(Integer idestudiantes2024) {
        estudiantes2024 estudiante = estudianteRepositorio.findById(idestudiantes2024).orElse(null);
        return estudiante;
    }
    //Eliminar Estudiante
    @Override
    public void eliminarEstudiante(estudiantes2024 estudiante) {
        estudianteRepositorio.delete(estudiante);
    }
    //Metodo listar 
    @Override
    public List<estudiantes2024> listarEstudiantes() {
       List<estudiantes2024> estudiantes = estudianteRepositorio.findAll();
       return estudiantes;
    }
    
    //Guardar Estudiante
    @Override
    public void guardarEstudiante(estudiantes2024 estudiante) {
        estudianteRepositorio.save(estudiante);
    }
}