"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    getInfos() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
exports.User = User;
