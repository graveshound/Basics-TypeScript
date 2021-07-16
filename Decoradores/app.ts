/*class Villano{
  public nombre:string;

  constructor(nombre:string){
    this.nombre=nombre;
  }

}*/
function mostrar( constructor:Function ){
  console.log(constructor)
}

@mostrar
class Villano{


  constructor( public nombre:string){

  }

}
