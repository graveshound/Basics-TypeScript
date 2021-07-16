interface Xmen{
nombre:string,
poder:string,
edad:number
}

let enviar = (xmen:Xmen)=> console.log("enviado a "+ gambit.nombre);

let enviarCuartel = (xmen:Xmen)=> console.log("Con su poder "+ gambit.poder);

let gambit:Xmen={
  nombre:"Gambito",
  poder: "energia",
  edad: 15
}

enviar(gambit);

enviarCuartel(gambit);
