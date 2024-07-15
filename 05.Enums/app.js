"use strict";
// les enums
var Ecole;
(function (Ecole) {
    Ecole["Lycee"] = "Lyc\u00E9e Moderne de Treichville";
    Ecole["Universite"] = "Universit\u00E9 de Cocody";
    Ecole["EcolecolePrimaire"] = "Groupe Scolaire Saint-Chalmel";
})(Ecole || (Ecole = {}));
let monEcole = Ecole.Lycee;
console.log(monEcole);
console.log("Mon lycée: " + monEcole);
// console.log(Ecole[1]);
