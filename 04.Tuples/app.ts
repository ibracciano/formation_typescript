let personage: [string, number, boolean] = ["Ouattara", 27, false];

console.log(personage);

// tuples avec union
let coordinates: [number | string, number] = [20, 20];
console.log(coordinates);

// destructuration des tuples
let [nom, age, estEnfant] = personage;
console.log(`Nom: ${nom}, Age: ${age}, Est-ce un enfant? : ${estEnfant}`);

let [positionX, positionY] = coordinates;
console.log(`Position X: ${positionX}, Position Y: ${positionY}`);
