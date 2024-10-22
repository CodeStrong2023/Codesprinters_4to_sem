package utn.tienda_libros.servicio;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import utn.tienda_libros.modelo.Libro;
import utn.tienda_libros.repositorio.LibroRepositorio;

@Service
public class LibroServicio implements IlibroServicio {
    // Agrega una intancia
    @Autowired
    private LibroRepositorio libroRepositorio;

    @Override
    public List<Libro> listarLibros() {
        return libroRepositorio.findAll();
    }

    @Override
    public Libro buscarLibroPorId(Integer idLibro) {
        Libro libro =libroRepositorio.findById(idLibro).orElse(null); // O recibe el ID o es nulo 
        return libro;
    }

    @Override
    public void guarerLibro(Libro libro) {
       libroRepositorio.save(libro); // Inserta o actualiza
    }

    @Override
    public void eliminarLibro(Libro libro) {
        libroRepositorio.delete(libro);
    }

}
