"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Bonjour, je m'appelle ${this.name} et j'ai ${this.age} ans`);
    }
}
// instancier une class
let person1 = new Person("John Doe", 30);
console.log(person1.greet());
let person2 = new Person("Ouattara Ibrahim", 28);
console.log(person2.greet());
