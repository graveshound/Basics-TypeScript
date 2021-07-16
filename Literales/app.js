"use strict";
let nombre = "Pablo";
let apellido = "Arce";
let edad = 32;
let texto = `Hola, ${nombre} ${apellido} creo que tienes ${edad} años`;
console.log(texto);
function getNombre() {
    return "Pedro Arce";
}
let parrafo = `${getNombre()}`;
console.log(parrafo);
console.log(`Hola este es un ${parrafo}con el ${texto}`);
