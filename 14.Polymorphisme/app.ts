// A - Polymorphisme 1
// 1- modification des methodes dans chaque sous classe
class Animal {
  getSounds(): void {
    console.log("Les animaux font du bruit");
  }
}

class Chien extends Animal {
  getSounds(): void {
    console.log("Le chien aboie");
  }
}

class Chat extends Animal {
  getSounds(): void {
    console.log("Le chat miaule");
  }
}

// 2- creation d'instances
let animal = new Animal();
let chien = new Chien();
let chat = new Chat();

// 3- utilisation des instances

animal.getSounds(); // Les animaux font du bruit
chien.getSounds(); // Le chien aboie
chat.getSounds(); // Le chat miaule

// B - Polymorphisme 2
class Shape {
  getArea(): number {
    return 0;
  }
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }
  getArea(): number {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(private radius: number, private form: string) {
    super();
  }
  getArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

let shape = [new Rectangle(4, 6), new Circle(2, "circle")];

shape.forEach((s) => {
  console.log(`Surface de la forme: ${s.getArea()}`);
});
