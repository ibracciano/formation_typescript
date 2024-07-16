class SuperClass {
  // proprietes et methodes de la classe
  constructor() {
    // initialisation de la class
  }
}

class SubClass extends SuperClass {
  // proprietes et methodes de la sous-classe
  constructor() {
    super(); // appel du constructeur de la super-classe
    // initialisation de la sous-classe
  }

  // Methodes propres à la sous-classe
  methodSubClass(): void {
    // console.log("Methode de la sous-classe");
  }
}

// Exercice pratique

class User {
  id: number;
  name: string;
  age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  getInfos(): string {
    return `L'utilisateur numero ${this.id}, se nomme ${this.name}. Il a ${this.age} ans`;
  }
}

class Employee extends User {
  department: string;

  constructor(id: number, name: string, age: number, department: string) {
    super(id, name, age);
    this.department = department;
  }
  getInfos(): string {
    return `${super.getInfos()} et travaille dans le departement ${
      this.department
    }`;
  }
}

const employee1 = new Employee(1, "John", 29, "Assistance sociale");
const employee2 = new Employee(2, "Doe", 20, "Comptabilité");

console.log(employee1.getInfos()); // L'utilisateur  numero 1 se nomme John et a 29 ans, travaille dans le departement Assistance sociale
console.log(employee2.getInfos()); // L'utilisateur  numero 1 se nomme John et a 29 ans, travaille dans le departement Assistance sociale
