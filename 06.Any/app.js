"use strict";
let data = "papa";
console.log(data);
data = 3;
console.log(data);
data = true;
console.log(data);
const mixedTab = ["papa", 23, true];
console.log(mixedTab);
const mixedObj = {
    name: "papa",
    age: 23,
    isChild: true,
};
console.log(mixedObj);
// les tuples
const infos = [
    "Ouattara",
    "Ibrahim",
    "Lycée de Treichville",
];
const [nom, prenom, Lycee] = infos;
console.log(nom);
