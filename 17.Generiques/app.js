"use strict";
// les generiques de fonctions
function createList() {
    const list = [];
    return {
        add: (value) => {
            value.map((val) => list.push(val));
        },
        get: (i) => {
            return list[i];
        },
    };
}
const myList = createList();
// console.log(myList);
myList.add([
    { name: "John", age: 20 },
    { name: "Alice", age: 5 },
]);
console.log(myList.get(1)); // 1
