"use strict";
var promesa = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("promesa Terminada");
        resolve();
    }, 1500);
});
console.log("paso 1");
promesa.then(function () { return console.log("ejecutarme cuando todo termine bien"); }, function () { return console.log("ejecutarme cuando todo termine mal"); });
console.log("paso 2");
