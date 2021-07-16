"use strict";
var Avenger = /** @class */ (function () {
    function Avenger(nombre, equipo, nombreReal) {
        this.nombre = "";
        this.equipo = "";
        this.nombreReal = "";
        this.puedePelear = false;
        this.peleasganadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger;
}());
var ironman = new Avenger("Iron Man", "War", "Tony Stark");
var hawkeye = new Avenger("Hawkeye", "Cap", "Roger");
console.log(hawkeye);
console.log(ironman);
console.log(ironman.nombre + " le parte las nalgas a " + hawkeye.nombreReal);
