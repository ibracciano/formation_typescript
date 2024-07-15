interface User {
  id: number;
  name: string;
  age: number;
  email: string;
  isActive: boolean;
}

let users: User[] = [
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

// rendre certaines proprietés optionnelles

interface UserOptional {
  id: number;
  name: string;
  age: number;
  email: string;
  isActive?: boolean;
}

const newUsers: UserOptional[] = [
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

// rendre une propriété non modifiable

interface UserImmutable {
  readonly id: number;
  readonly name: string;
  readonly age: number;
  readonly email: string;
  isActive: boolean;
}

const immutableUsers: UserImmutable[] = [
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

// faire de l'heritage
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const dog: Dog = {
  name: "Rex",
  breed: "Labrador",
};

console.log(dog);

// les methodes dans les objets

interface Cat {
  name: string;
  sound(): string;
}
const cat: Cat = {
  name: "Whiskers",
  sound(): string {
    return "Meow";
  },
};

console.log(cat.sound());

// afficher un chat
const afficherCat = (chat: Cat) => {
  console.log(
    `Le chat se nomme : ${chat.name} #### et son cri est : ${chat.sound()}`
  );
};

afficherCat(cat);
