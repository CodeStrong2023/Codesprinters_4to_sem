package utn.estudiantes.modelo;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
@Entity
//Codigo boilerplate
@Data//agrega los medotos gett y sett
@NoArgsConstructor // agrega contructor vacio
@AllArgsConstructor // contrucor con todos los argumentos
@ToString // To string se agrega solo
public class estudiantes2024 {
//Atributos
//Llave primaria
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)// Para llaves autoincrementables
private Integer idestudiantes2024;
private String nombre;
private String apellido;
private String telefono;
private String email;
}
