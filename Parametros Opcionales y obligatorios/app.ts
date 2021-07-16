function activar(nombre:string, cosa:string="Batiseñal", veces?:number){

let mensaje:string;


if(veces){
mensaje=`${nombre} activo la ${cosa} ${veces} veces`;
}else{
mensaje=`${nombre} activo la ${cosa}`;
}
console.log(mensaje);


}

activar("Pedro", "Batiseñal",5);
