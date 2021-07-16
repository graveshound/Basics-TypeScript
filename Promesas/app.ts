let promesa = new Promise( function(resolve, reject){

setTimeout(
()=> { console.log("promesa Terminada");

resolve();

},1500)

} )

console.log("paso 1");

promesa.then(()=>console.log("ejecutarme cuando todo termine bien"),()=>console.log("ejecutarme cuando todo termine mal") )

console.log("paso 2");
