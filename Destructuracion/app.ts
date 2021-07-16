//Destructuracion Objetos
let avenger ={
  nombre:"Tony Stark",
  alias: "Iron Man",
  poder: "dinero"
}
var real = avenger.nombre;
var al = avenger.alias;
var power=avenger.poder;

console.log(real, al, power)

let {nombre, alias, poder} = avenger;

console.log(nombre, alias, poder)
//Destructuracion arreglos

let justice:string[] = ["SuperMan", "Batman", "Flash"]

let [clark, bruce, barry] = justice;

console.log(clark, bruce, barry)
