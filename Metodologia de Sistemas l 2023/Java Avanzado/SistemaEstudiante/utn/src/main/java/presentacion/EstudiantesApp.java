package presentacion;
import java.util.List;
import java.util.Scanner;
import dominio.Estudiante;
import datos.EstudianteDAO;

public class EstudiantesApp {
    public static void main(String[] args) {
        boolean salir = false; 
        Scanner consola = new Scanner(System.in);
        EstudianteDAO estudianteDao = new EstudianteDAO(); // Cambié a EstudianteDAO

        while (!salir) {
            try {
                mostrarMenu(); // Método que mostrará el menú
                salir = ejecutarOpciones(consola, estudianteDao); // Cambié el argumento a estudianteDao

            } catch(Exception e) {
                System.out.println("Ocurrió un error al ejecutar el programa: " + e.getMessage());
            } // fin try-catch
        } // fin while
        consola.close(); // Cerrar el escáner al finalizar
    } // fin main

    private static void mostrarMenu() {
        System.out.println("""
        ###### SISTEMA ESTUDIANTES ######
          1- LISTAR ESTUDIANTES 
          2- BUSCAR ESTUDIANTE 
          3- AGREGAR ESTUDIANTE 
          4- MODIFICAR ESTUDIANTE
          5- ELIMINAR ESTUDIANTE
          6- SALIR DEL SISTEMA 
        ####### ELIJE UNA OPCION #######
        """);
    } // fin mostrarMenu

    private static boolean ejecutarOpciones(Scanner consola, EstudianteDAO estudianteDao) {
        int opcion = Integer.parseInt(consola.nextLine());

        switch (opcion) {
            case 1 -> {
                // LISTAR ESTUDIANTES
                System.out.println("###### LISTA ESTUDIANTES #######");
                List<Estudiante> estudiantes = estudianteDao.listar(); // Uso correcto del método listar
                estudiantes.forEach(System.out::println); // Imprime la lista
            } // fin caso 1

            case 2 -> {
                // BUSCAR ESTUDIANTE
                System.out.println("###### BUSCAR ESTUDIANTE #######");
                System.out.println("INTRODUCE EL ID DEL ESTUDIANTE A BUSCAR:");
                int idBuscar = Integer.parseInt(consola.nextLine());
                Estudiante estudiante = new Estudiante(idBuscar);
                boolean encontrado = estudianteDao.buscarEstudiantePorId(estudiante);
                if (encontrado)
                    System.out.println("ESTUDIANTE ENCONTRADO: " + estudiante);
                else
                    System.out.println("ESTUDIANTE NO ENCONTRADO: " + estudiante);
            } // fin caso 2

            case 3 -> {
                // AGREGAR ESTUDIANTE
                System.out.println("###### AGREGAR ESTUDIANTE #######");
                System.out.println("INTRODUCE EL NOMBRE DEL ESTUDIANTE:");
                String nombre = consola.nextLine();
                System.out.println("INTRODUCE EL APELLIDO:");
                String apellido = consola.nextLine();
                System.out.println("INTRODUCE EL TELEFONO:");
                String telefono = consola.nextLine();
                System.out.println("INTRODUCE EL MAIL:");
                String email = consola.nextLine();

                Estudiante estudiante = new Estudiante(nombre, apellido, telefono, email);
                boolean agregado = estudianteDao.agregarEstudiante(estudiante);
                if (agregado)
                    System.out.println("ESTUDIANTE AGREGADO: " + estudiante);
                else
                    System.out.println("ESTUDIANTE NO AGREGADO: " + estudiante);
            } // fin caso 3

            case 4 -> {
                // MODIFICAR ESTUDIANTE
                System.out.println("###### MODIFICAR ESTUDIANTE #######");
                System.out.println("INTRODUCE EL ID DEL ESTUDIANTE A MODIFICAR:");
                int idEstudiante = Integer.parseInt(consola.nextLine());
                Estudiante estudiante = new Estudiante(idEstudiante);
                System.out.println("INTRODUCE EL NUEVO NOMBRE DEL ESTUDIANTE:");
                String nombre = consola.nextLine();
                System.out.println("INTRODUCE EL NUEVO APELLIDO DEL ESTUDIANTE:");
                String apellido = consola.nextLine();
                System.out.println("INTRODUCE EL NUEVO TELEFONO DEL ESTUDIANTE:");
                String telefono = consola.nextLine();
                System.out.println("INTRODUCE EL NUEVO MAIL DEL ESTUDIANTE:");
                String email = consola.nextLine();

                estudiante.setNombre(nombre);
                estudiante.setApellido(apellido);
                estudiante.setTelefono(telefono);
                estudiante.setEmail(email);
                
                boolean modificado = estudianteDao.modificarEstudiante(estudiante);
                if (modificado)
                    System.out.println("ESTUDIANTE MODIFICADO: " + estudiante);
                else
                    System.out.println("ESTUDIANTE NO MODIFICADO: " + estudiante);
            } // fin caso 4

            case 5 -> {
                // ELIMINAR ESTUDIANTE
                System.out.println("###### ELIMINAR #######");
                System.out.println("INTRODUCE EL ID DEL ESTUDIANTE A ELIMINAR:");
                int idEstudiante = Integer.parseInt(consola.nextLine());
                Estudiante estudiante = new Estudiante(idEstudiante);
                boolean eliminado = estudianteDao.eliminarEstudiante(estudiante);
                if (eliminado)
                    System.out.println("ESTUDIANTE ELIMINADO: " + estudiante);
                else
                    System.out.println("ESTUDIANTE NO ELIMINADO: " + estudiante);
            } // fin caso 5

            case 6 -> {
                // SALIR
                System.out.println("###### USTED SALIÓ DEL SISTEMA #######");
                return true;
            } // fin caso 6

            default -> System.out.println("OPCIÓN NO VÁLIDA. POR FAVOR, ELIGE UNA OPCIÓN DEL MENÚ."); // Manejo de opción no válida
        } // fin switch
        return false;
    } // fin ejecutarOpciones
} // fin clase EstudiantesApp