function inverserChaine(str: string): string {
  return str.split("").reverse().join("");
}

const chaine = "Hello World";
console.log(inverserChaine(chaine)); // "dlroW olleH"
