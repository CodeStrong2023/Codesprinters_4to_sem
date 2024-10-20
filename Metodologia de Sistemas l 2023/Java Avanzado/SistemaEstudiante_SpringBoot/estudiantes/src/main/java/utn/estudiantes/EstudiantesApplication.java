package utn.estudiantes;
import org.hibernate.boot.archive.scan.spi.Scanner;
import org.hibernate.mapping.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import utn.estudiantes.modelo.estudiantes2024;
import utn.estudiantes.servicio.EstudianteServicio;


@SpringBootApplication

public class EstudiantesApplication implements CommandLineRunner {

	@Autowired
	private EstudianteServicio estudianteServicio;
	private static final Logger logger = LoggerFactory.getLogger(EstudiantesApplication.class); // SIRVE PARA PODER MANDAR A IMPRIMIR INFORMACION A CONSOLA

	String nl = System.lineSeparator();	// agrega un salto de linea (generico para todos los sistemas operativos)
	public static void main(String[] args) {
		logger.info("Iniciando la Aplicacion..");
		SpringApplication.run(EstudiantesApplication.class, args);	//levantar la fabrica de Spring
		logger.info("Aplicacion Finalizada..");
	}
	// Metodo run
	@Override
	public void run(String... args) throws Exception {
		logger.info(nl+"Ejecutando el metodo run de Spring"+nl);
		var salir = false;
		var consola = new java.util.Scanner(System.in);
		while (!salir) {
			mostrarMenu();
			salir = ejecutarOpciones(consola);
			logger.info(nl);
		} // fin del while
	}
	// MOSTRAR MENU
	private void mostrarMenu() {
		logger.info(nl);
		logger.info("""
		#####	SISTEMA DE ESTUDIANTES  #####
			1- LISTAR ESTUDIANTES
			2- BUSCAR ESTUDIANTES
			3- AGREGAR ESTUDIANTES
			4- MODIFICAR ESTUDIANTES
			5- ELIMINAR ESTUDIANTES
			6- SALIR 
		#####################################
				""");
	}
	// EJECUTAR OPCIONES
	private boolean ejecutarOpciones(java.util.Scanner consola) {
    var opcion = Integer.parseInt(consola.nextLine());
    var salir = false;
    switch (opcion) {
        // LISTAR ESTUDIANTES
        case 1 -> {
            logger.info(nl + "#### LISTADO DE ESTUDIANTES #### " + nl);
            java.util.List<estudiantes2024> estudiantes = estudianteServicio.listarEstudiantes();
            estudiantes.forEach((estudiante -> logger.info(estudiante.toString() + nl)));
        }
		// BUSCAR ESTUDIANTE
		case 2 -> {
            logger.info(nl + "#### BUSCAR ESTUDIANTE ####" + nl);
            var idEstudiante = Integer.parseInt(consola.nextLine());
			estudiantes2024 estudiante = estudianteServicio.buscarEstudiantePorID(idEstudiante);
			if (estudiante !=null)
				logger.info("ESTUDIANTE ENCONTRADO " + estudiante + nl);
			else
				logger.info("ESTUDIANTE NO ENCONTRADO" + estudiante +nl);
        }
		// AGREGAR ESTUDIANTE
		case 3 -> {
            logger.info(nl + "#### AGREGAR ESTUDIANTE #### " + nl);
            logger.info(" Agregar estudiante: " + nl);
			logger.info("Nombre: " + nl);
			var nombre = consola.nextLine();
			logger.info("Apellido:" + nl);
			var apellido = consola.nextLine();
			logger.info("Telefono:" + nl);
			var telefono = consola.nextLine();
			logger.info("Email:" + nl);
			var emial = consola.nextLine();
			// CREAMOS EL OBJETO ESTUDIANTE SIN EL ID 
			var estudiante = new estudiantes2024();
			estudiante.setNombre(nombre);
			estudiante.setApellido(apellido);
			estudiante.setTelefono(telefono);
			estudiante.setEmail(emial);
			estudianteServicio.guardarEstudiante(estudiante);
			logger.info("Estudiante agregado:" + estudiante + nl);
		}
		// MODIFICAR ESTUDIANTE 
		case 4 -> {
            logger.info(nl + "#### MODIFICAR ESTUDIANTE #### " + nl);
            logger.info(" Ingrese el Idestudiante: " + nl);
			var idestudiante = Integer.parseInt(consola.nextLine());
			// BUSCAMOS EL ESTUDIANTE A MODDIFICAR
			estudiantes2024 estudiante= estudianteServicio.buscarEstudiantePorID(idestudiante);
			if (estudiante !=null){
				logger.info("Nombre: " + nl);
				var nombre = consola.nextLine();
				logger.info("Apellido:" + nl);
				var apellido = consola.nextLine();
				logger.info("Telefono:" + nl);
				var telefono = consola.nextLine();
				logger.info("Email:" + nl);
				var emial = consola.nextLine();
				// CAMBIAMOS LOS VALORES DEL OBJETO EXISTENTE
				estudiante.setNombre(nombre);
				estudiante.setApellido(apellido);
				estudiante.setTelefono(telefono);
				estudiante.setEmail(emial);
				estudianteServicio.guardarEstudiante(estudiante);
				logger.info("Estudiante modificado: " + estudiante +nl);
			}
			else{
			 logger.info("Estudiante no encontrado:" + idestudiante + nl);
			}
		}
		// ELIMINAR ESTUDIANTE
		case 5->{
			logger.info(("#### ELIMINAR ESTUDIANTE ####" + nl));
			logger.info("Digite el id estudiante: ");
			// BUSCAMOS EL ESTUDIANTE A ELIMINAR
			var idestudiante = Integer.parseInt(consola.nextLine());
			var estudiante = estudianteServicio.buscarEstudiantePorID(idestudiante);
			if(estudiante != null){
				estudianteServicio.eliminarEstudiante(estudiante);
				logger.info("Estudiante eliminado:" + estudiante + nl);
			}
			else
				logger.info("Estudiante no encontrado por ID" + estudiante + nl);
		}
		case 6->{
			logger.info("SALIO DEL PROGRAMA" + nl + nl);
			salir = true;
		}
		default -> logger.info("OPCION INCORRECTA"+ opcion +nl);
		} // FIN SWITCH
		return salir;
	} // FIN EJECUTAROPCCIONES
}
