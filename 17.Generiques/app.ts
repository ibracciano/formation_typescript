// les generiques de fonctions

// function createList() {
//   const list: number[] = [];
//   return {
//     add: (value: number[]) => {
//       value.map((val) => list.push(val));
//     },
//     get: (i: number) => {
//       return list[i];
//     },
//   };
// }

interface User {
  name: string;
  age: number;
}

function createList<User>() {
  const list: User[] = [];
  return {
    add: (value: User[]) => {
      value.map((val) => list.push(val));
    },
    get: (i: number) => {
      return list[i];
    },
  };
}

const myList = createList();
// console.log(myList);

myList.add([
  { name: "John", age: 20 },
  { name: "Alice", age: 5 },
]);

console.log(myList.get(1)); // 1
