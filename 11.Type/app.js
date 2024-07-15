"use strict";
const value = {
    x: 10,
    y: 20,
};
console.log(value);
const students = [
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
function searchStudent(id) {
    return students.find((std) => std.id === id);
}
function createStudent(student) {
    students.push(student);
    console.log(students);
}
createStudent({ id: 3, name: "Bob Johnson", age: 21, level: "low" });
console.log(searchStudent(3));
