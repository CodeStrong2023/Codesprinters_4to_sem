package utn.tienda_libros;

import org.springframework.boot.WebApplicationType;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.ConfigurableApplicationContext;
import utn.tienda_libros.vista.LibroFrom;

import java.awt.EventQueue;

@SpringBootApplication
public class TiendaLibrosApplication {

	public static void main(String[] args) {

		ConfigurableApplicationContext  contextoSpring =
				new SpringApplicationBuilder(TiendaLibrosApplication.class)
						.headless(false)  // configuracion de los headless
						.web(WebApplicationType.NONE) // No es aplicacion web
						.run(args);
	 // Ejecutamos el codigo para cargar el formulario
		EventQueue.invokeLater(() -> {
				LibroFrom libroFrom = contextoSpring.getBean(LibroFrom.class);
				libroFrom.setVisible(true);
		});
	}
}
