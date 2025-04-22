//1. Create a School class and create a student and faculty method. The Student method gives the student name, email and contact number as arguments and prints all details the same as faculty using class & object.

// class School {

//     student(name, email, contact) {
//         this.name = name;
//         this.email = email;
//         this.contact = contact;
//         console.log(`Student Name: ${this.name}, Email: ${this.email}, Contact: ${this.contact}`);
//     }

//     faculty(name, email, contact) {
//         this.name = name;
//         this.email = email;
//         this.contact = contact;
//         console.log(`Faculty Name: ${this.name}, Email: ${this.email}, Contact: ${this.contact}`);
//     }

// }

// let display = new School();
// display.student("Zeel Ramani", "zeel@example.com", "1234567890");


//output:

// Student Name => Zeel Ramani
// Email => zeel@example.com
// Contact => 1234567890


//2. Create a Person class with an argument name and age. create an Employee class through print out details of Person Class.

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// class Employee extends Person {
//     constructor(name, age, position) {
//         super(name, age);
//         this.position = position;
//     }

//     display() {
//         console.log(`Name: ${this.name}, Age: ${this.age}, Position: ${this.position}`);
//     }
// }

// let employee = new Employee("ZEEL RAMANI", 30, "FULL STACK DEVELOPER");
// employee.display();

//output:

// Name: ZEEL RAMANI, Age: 30, Position: FULL STACK DEVELOPER


//3. Employee class creates a constructor called print a simple message.

// class Employee {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     print() {
//         console.log(`Employee Name: ${this.name}, Age: ${this.age}`);
//     }
// }

// let employee = new Employee("John Doe", 30);
// employee.print();

//output:

// Employee Name: John Doe, Age: 30


//4. Create a shape class and create a rectangle and circle method find circle area(3.14*r*r) and rectangle area (width*height) using with argument. 

// class Shape {
//     rectangle(w, h) {
//         return w * h;
//     }

//     circle(r) {
//         return 3.14 * r * r;
//     }
// }

// // Example usage
// let shape = new Shape();

// console.log(`Rectangle Area: ${shape.rectangle(6, 4)}`);
// console.log(`Circle Area: ${shape.circle(4)}`);

//output:

// Rectangle Area: 24
// Circle Area: 50.24