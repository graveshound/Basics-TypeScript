"use strict";
var funcion1 = function (a) {
    return a;
};
console.log(funcion1("Pedro"));
var funcion1f = function (a) { return a; };
console.log(funcion1f("Pablo"));
var Heroe = {
    nombre: "Spiderman",
    power: function () {
        setTimeout(function () {
            console.log(this.nombre + " lanza su telaraña");
        }, 1500);
    },
    powerf: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " lanza su telaraña"); }, 1500);
    }
};
Heroe.power();
Heroe.powerf();
