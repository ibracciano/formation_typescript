export class User {
  id: number;
  name: string;
  age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  getInfos(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}
