let data: any = "papa";
console.log(data);

data = 3;
console.log(data);

data = true;
console.log(data);

const mixedTab: any[] = ["papa", 23, true];
console.log(mixedTab);

const mixedObj: any = {
  name: "papa",
  age: 23,
  isChild: true,
};

console.log(mixedObj);

// les tuples
const infos: [string, string, string] = [
  "Ouattara",
  "Ibrahim",
  "Lycée de Treichville",
];

const [nom, prenom, Lycee] = infos;
console.log(nom);
