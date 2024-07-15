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

// Ajouter une nouvelle propriété à un objet
// user.email = "johndoe@example.com";
// console.log(user);
// il y aura un souci de typage alors on fait intervenir les interfaces

interface User {
  name: string;
  age: number;
  isAdmin: boolean;
  adress: {
    street: string;
    city: string;
    state: string;
  };
}

const newUser: User = {
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
