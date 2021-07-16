class Avenger{
  nombre:string="";
  equipo:string ="";
  nombreReal:string="";
  puedePelear:boolean=false;
  peleasganadas:number=0;

constructor(nombre:string,equipo:string,nombreReal:string){

this.nombre=nombre;
this.equipo=equipo;
this.nombreReal=nombreReal;

}
}

let ironman:Avenger =new Avenger("Iron Man", "War","Tony Stark");

let hawkeye:Avenger =new Avenger("Hawkeye", "Cap","Roger")

console.log(hawkeye);
console.log(ironman);

console.log(`${ironman.nombre} le parte las nalgas a ${hawkeye.nombreReal}`)
