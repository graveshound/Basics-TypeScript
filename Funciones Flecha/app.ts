let funcion1 = function(a:string){
  return a;
}
console.log(funcion1("Pedro"))

let funcion1f= (a:string) => a;

console.log(funcion1f("Pablo"))


let Heroe={
nombre:"Spiderman",
power(){
  setTimeout( function(){
  console.log(this.nombre +" lanza su telaraña")},1500);
},
powerf(){
  setTimeout( ()=> console.log(this.nombre +" lanza su telaraña"),1500);
}
}

Heroe.power();
Heroe.powerf();
