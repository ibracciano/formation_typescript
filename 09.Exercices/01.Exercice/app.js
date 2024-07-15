"use strict";
function calculerSomme(tab) {
    return tab.reduce((acc, curr) => acc + curr, 0);
}
const numbersTab = [1, 2, 3, 4, 5];
console.log("resulat : " + calculerSomme(numbersTab)); // 15
