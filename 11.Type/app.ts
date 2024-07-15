type Point = {
  x: number;
  y: number;
};

const value: Point = {
  x: 10,
  y: 20,
};
console.log(value);

// type Status = 'pending' | 'completed' | 'loading'
type Level = "high" | "low";

interface Student {
  id: number;
  name: string;
  age: number;
  level: Level;
}

const students: Student[] = [
  {
    id: 1,
    name: "John Doe",
    age: 20,
    level: "high",
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 22,
    level: "low",
  },
];

function searchStudent(id: number) {
  return students.find((std) => std.id === id);
}

function createStudent(student: Student): void {
  students.push(student);
  console.log(students);
}

createStudent({ id: 3, name: "Bob Johnson", age: 21, level: "low" });
console.log(searchStudent(3));
