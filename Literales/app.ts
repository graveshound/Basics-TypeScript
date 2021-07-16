let nombre:string="Pablo"
let apellido:string="Arce"
let edad:number=32;

let texto=`Hola, ${nombre} ${apellido} creo que tienes ${edad} años`;

console.log(texto);

function getNombre(){
  return "Pedro Arce"

}

let parrafo:string = `${getNombre()}`;

console.log(parrafo);

console.log(`Hola este es un ${parrafo}con el ${texto}`)
