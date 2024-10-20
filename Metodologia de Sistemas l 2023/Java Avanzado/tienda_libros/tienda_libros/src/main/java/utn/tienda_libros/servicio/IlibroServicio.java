package utn.tienda_libros.servicio;

import java.util.List;
import utn.tienda_libros.modelo.Libro;

public interface IlibroServicio {

    //Firmas de funciones

    public List<Libro> listarLibros();

    public Libro buscarLibroPorId(Integer idLibro);

    public void guarerLibro(Libro libro);

    public void eliminarLibro(Libro libro);


}
