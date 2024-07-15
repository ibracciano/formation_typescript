"use strict";
// Les objets classiques dans Typescript
const user = {
    name: "John Doe",
    age: 30,
    isAdmin: false,
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
    },
};
console.log(user.name);
// Modifier une proprieté
user.isAdmin = true;
console.log(user);
const newUser = {
    name: "John Doe",
    age: 30,
    isAdmin: false,
    adress: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
    },
};
console.log(newUser.name);
