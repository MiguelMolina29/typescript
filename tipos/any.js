"use strict";
// Se nos pide usar lo menos que se pueda le tipo any
(function () {
    var avenger = 123;
    var exist;
    var power;
    avenger = "Dr Strange";
    console.log(avenger.charAt(0));
    avenger = 150.2354;
    console.log(avenger.toFixed(2));
    console.log(exist);
    console.log(power);
    // Se debe intentar poner el tipo de dato para que ts nos de la ayuda
})();
