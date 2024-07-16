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
