
// Uso de Let y Const
let nombre:string = "Ricardo Tapia";
let edad:number = 23;

const PERSONAJE = {
  nombre: nombre,
  edad: edad
};


// Cree una interfaz que sirva para validar el siguiente objeto
interface Justice{
  nombre:string;
  artesMarciales:string[];
}

var batman:Justice = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

// Convertir esta funcion a una funcion de flecha
function resultadoDoble( a:any, b:any ){
  return (a + b) * 2
}
let operacion = (a:number,b:number)=> (a + b) * 2;

console.log(`El resultado de la normal es ${resultadoDoble(4,5)}`)

console.log(`El resultado es ${operacion(1,2)}`);



// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre:string, arma:string="arco",  poder?:string){
  var mensaje;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + poder;
  }
  console.log(mensaje)
};
getAvenger("IronMan","arco","dinero");

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
class Rectangulo{
  base:number=0;
  altura:number=0;

calcularArea():number{
  this.base*this.altura;
}

}
