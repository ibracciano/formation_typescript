"use strict";
let users = [
    {
        id: 1,
        name: "John Doe",
        age: 30,
        email: "john.doe@example.com",
        isActive: true,
    },
    {
        id: 2,
        name: "Jane Smith",
        age: 28,
        email: "jane.smith@example.com",
        isActive: false,
    },
];
console.log(users.find((user) => (user.age = 30)));
const newUsers = [
    {
        id: 1,
        name: "John Doe",
        age: 30,
        email: "john.doe@example.com",
    },
    {
        id: 2,
        name: "Jane Smith",
        age: 28,
        email: "jane.smith@example.com",
        isActive: false,
    },
];
console.log(newUsers);
const immutableUsers = [
    {
        id: 1,
        name: "John Doe",
        age: 30,
        email: "john.doe@example.com",
        isActive: true,
    },
    {
        id: 2,
        name: "Jane Smith",
        age: 28,
        email: "jane.smith@example.com",
        isActive: false,
    },
];
const user1 = immutableUsers[0];
console.log(user1);
// user1.id = 3 c'est impossible car la proprieté est en lecture seule
user1.isActive = !user1.isActive;
console.log(user1);
const dog = {
    name: "Rex",
    breed: "Labrador",
};
console.log(dog);
const cat = {
    name: "Whiskers",
    sound() {
        return "Meow";
    },
};
console.log(cat.sound());
// afficher un chat
const afficherCat = (chat) => {
    console.log(`Le chat se nomme : ${chat.name} #### et son cri est : ${chat.sound()}`);
};
afficherCat(cat);
