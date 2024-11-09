// this === global = true

//Mostrar algo en la consola
//console.log();

//Mostrar un mensaje en forma de error
//console.error();

//Ejecutar un codigodespues de un intervalo de tiempo
//setTimeout(() => {});

//Ejecutar un codigo cada intervalo de tiempo
//setInterval(() => {});

//Da prioridad deejecucion a una funcion asincronica
//setimmdiate(() => {});

//console.log(setinterval);

let i = 0;
let intervalo = setInterval(() => {
    console.log('Hola');
    if (i === 3) {
        clearInterval(intervalo); //detenemos la funcion
    }
    i ++;
}, 1000)

setImmediate(() => {
    console.log('Sludo inmediato');
})

//require();

console.log(_filename);

global.miVariable = 'mi variable global';
console.log(miVariable);