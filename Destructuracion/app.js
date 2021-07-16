"use strict";
//Destructuracion Objetos
var avenger = {
    nombre: "Tony Stark",
    alias: "Iron Man",
    poder: "dinero"
};
var real = avenger.nombre;
var al = avenger.alias;
var power = avenger.poder;
console.log(real, al, power);
var nombre = avenger.nombre, alias = avenger.alias, poder = avenger.poder;
console.log(nombre, alias, poder);
//Destructuracion arreglos
var justice = ["SuperMan", "Batman", "Flash"];
var clark = justice[0], bruce = justice[1], barry = justice[2];
console.log(clark, bruce, barry);
