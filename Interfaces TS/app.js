"use strict";
var enviar = function (xmen) { return console.log("enviado a " + gambit.nombre); };
var enviarCuartel = function (xmen) { return console.log("Con su poder " + gambit.poder); };
var gambit = {
    nombre: "Gambito",
    poder: "energia",
    edad: 15
};
enviar(gambit);
enviarCuartel(gambit);
