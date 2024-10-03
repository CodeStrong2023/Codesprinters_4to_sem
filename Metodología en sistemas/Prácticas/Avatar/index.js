let ataqueJugador;
let ataqueEnemigo;
let vidaJugador = 3;
let vidaEnemigo = 3;
function iniciarJuego() {
  document
    .getElementById("boton-personaje")
    .addEventListener("click", seleccionarPersonajeJugador);
  document.getElementById("boton-punio").addEventListener("click", () => {
    seleccionarAtaque("Puño");
    combate();
  });
  document.getElementById("boton-patada").addEventListener("click", () => {
    seleccionarAtaque("Patada");
    combate();
  });
  document.getElementById("boton-barrida").addEventListener("click", () => {
    seleccionarAtaque("Barrida");
    combate();
  });
  document.getElementById("reglas-del-juego").style.display = "none";
  document.getElementById("boton-ocultar-reglas").style.display = "none";

  document
    .getElementById("boton-reglas")
    .addEventListener("click", mostrarReglas);
  document
    .getElementById("boton-ocultar-reglas")
    .addEventListener("click", ocultarReglas);
  crearPersonajes();
  renderizarPersonajes();
}
function mostrarReglas() {
  document.getElementById("reglas-del-juego").style.display = "block";
  document.getElementById("boton-reglas").style.display = "none";
  document.getElementById("boton-ocultar-reglas").style.display = "block";
}
function ocultarReglas() {
  document.getElementById("boton-reglas").style.display = "block";
  document.getElementById("reglas-del-juego").style.display = "none";
  document.getElementById("boton-ocultar-reglas").style.display = "none";
}
function combate() {
  if (vidaJugador > 0 && vidaEnemigo > 0) {
    ataqueAleatorioEnemigo();
    crearMensajeResultado();
    modificarVida();
  }
}
function crearMensajeResultado(resultado) {
  const mensajeResultado = document.createElement("p");
  mensajeResultado.innerHTML = `El jugador ha atacado con ${ataqueJugador} y el enemigo ha atacado con ${ataqueEnemigo}, el resultado es ${procesarResultado(
    ataqueJugador,
    ataqueEnemigo
  )}`;
  document.getElementById("mensajes").appendChild(mensajeResultado);
}
function modificarVida() {
  console.log("paso");
  document.getElementById("vida-jugador").innerHTML = vidaJugador;
  document.getElementById("vida-enemigo").innerHTML = vidaEnemigo;
  if (vidaJugador === 0) {
    document.getElementById("mensajes").innerHTML = "Has perdido";
  }
  if (vidaEnemigo === 0) {
    document.getElementById("mensajes").innerHTML = "Has ganado";
  }
}
function procesarResultado(ataqueJugador, ataqueEnemigo) {
  switch (ataqueJugador) {
    case "Puño":
      switch (ataqueEnemigo) {
        case "Puño":
          return "Empate";
        case "Patada":
          vidaEnemigo--;
          return "Gana jugador";
        case "Barrida":
          vidaJugador--;
          return "Gana enemigo";
      }
      break;
    case "Patada":
      switch (ataqueEnemigo) {
        case "Puño":
          vidaJugador--;
          return "Gana enemigo";
        case "Patada":
          return "Empate";
        case "Barrida":
          vidaEnemigo--;
          return "Gana jugador";
      }
      break;
    case "Barrida":
      switch (ataqueEnemigo) {
        case "Puño":
          vidaEnemigo--;
          return "Gana jugador";
        case "Patada":
          vidaJugador--;
          return "Gana enemigo";
        case "Barrida":
          return "Empate";
      }
      break;
  }
}

function seleccionarPersonajeJugador() {
  const personajes = ["zuko", "katara", "aang", "toph"];
  const spanPersonajeJugador = document.getElementById("personaje-jugador");

  for (let personaje of personajes) {
    if (document.getElementById(personaje).checked) {
      spanPersonajeJugador.innerHTML =
        personaje.charAt(0).toUpperCase() + personaje.slice(1);
      seleccionarPersonajeEnemigo();
      return;
    }
  }
  alert("Selecciona un personaje");
}

function seleccionarPersonajeEnemigo() {
  const personajes = ["Zuko", "Katara", "Aang", "Toph"];
  const personajeAleatorio = aleatorio(0, personajes.length - 1);
  document.getElementById("personaje-enemigo").innerHTML =
    personajes[personajeAleatorio];
}

function seleccionarAtaque(tipoAtaque) {
  ataqueJugador = tipoAtaque;
  ataqueAleatorioEnemigo();
  // Aquí se podría llamar a una función para procesar el resultado del combate.
}

function ataqueAleatorioEnemigo() {
  const ataques = ["Puño", "Patada", "Barrida"];
  ataqueEnemigo = ataques[aleatorio(0, ataques.length - 1)];
  // Aquí se podría llamar a una función para procesar el resultado del combate.
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
class Personaje {
  constructor(nombre, imagen) {
    this.nombre = nombre;
    this.imagen = imagen;
  }
}

let personajes = [
  new Personaje("Zuko", "./media/zuko.jpg"),
  new Personaje("Katara", "./media/katara.jpg"),
  new Personaje("Aang", "./media/aang.jpg"),
  new Personaje("Toph", "./media/toph.jpg"),
];
function renderizarPersonajes() {
  const contenedorPersonajes = document.getElementById("personajes-container");
  contenedorPersonajes.innerHTML = "";
  personajes.forEach((personaje, index) => {
    contenedorPersonajes.innerHTML += `
      <label for="personaje-${index}">${personaje.nombre}</label>
      <input type="radio" name="personaje" id="personaje-${index}" />
    `;
  });
}
function crearPersonajes() {
  document
    .getElementById("boton-agregar-personaje")
    .addEventListener("click", () => {
      const nombre = document.getElementById("nuevo-personaje-nombre").value;
      const imagen = document.getElementById("nuevo-personaje-imagen").value;

      if (nombre && imagen) {
        const nuevoPersonaje = new Personaje(nombre, imagen);
        personajes.push(nuevoPersonaje);
        renderizarPersonajes();
      } else {
        alert("Por favor, completa todos los campos.");
      }
    });
}

window.addEventListener("load", iniciarJuego);
