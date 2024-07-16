import multiply, { MathUtils, sub, sum } from "./math";

console.log("Le resultat de l'addition est : " + sum(6, 4));
console.log("Le resultat de la sustraction est : " + sub(6, 4));

console.log("Le resultat de la multiplication est : " + multiply(6, 4));

console.log("Le resultat de la division est : " + MathUtils.divide(6, 4));
console.log("Le resultat de la racine carrée est : " + MathUtils.squareRoot(6));
