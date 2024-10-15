package conexion;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {
    // Nos conectamos a la base de msql
    public static Connection getConnection() {
        Connection conextion = null;
        //Variables para concectarnos a la base de datos
        var baseDatos = "estudiantes";
        var url ="jdbc:mysql://localhost:3304/" + baseDatos;
        var usuario = "root";
        var password = "1234";

        //Cargamos la clase del driver de mysql en memoria
        try{
        Class.forName("com.mysql.cs.jdbc.Driver");
        conextion = DriverManager.getConnection(url,usuario,password);
        } catch(ClassNotFoundException | SQLException e){
            System.out.println("Ocurrio un error en la conexción " + e.getMessage());
        } // fin catch
        return conextion;
    } // fin metodo conexion


}