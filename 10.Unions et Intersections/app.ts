// l'union en typescript
let value: string | number;

value = 10;
console.log(value);

value = "Hello World";
console.log(value);

// l'intersection en typescript
interface A {
  valeurA: number;
}

interface B {
  valeurB: string;
}

type C = A & B;

let obj: C = { valeurA: 10, valeurB: "Hello World" };

console.log(obj);
