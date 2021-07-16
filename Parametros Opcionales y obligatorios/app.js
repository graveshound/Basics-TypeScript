"use strict";
function activar(nombre, cosa, veces) {
    if (cosa === void 0) { cosa = "Batiseñal"; }
    var mensaje;
    if (veces) {
        mensaje = nombre + " activo la " + cosa + " " + veces + " veces";
    }
    else {
        mensaje = nombre + " activo la " + cosa;
    }
    console.log(mensaje);
}
activar("Pedro", "Batiseñal", 5);
