let age = 25;
const name = "Alice";
console.log(age, name);
age = 26;



// Datatypes
let isStudent = true; // boolean
let height = 5.9; // number
let empty = null; // null
let notDefined; // undefined

//complex datatypes
let person = { name: "Bob", age: 30, mixed: [1,2,"hello"], bool: true }; // object

console.log(person.name);
console.log(person.age);
console.log(person.mixed[2]); // hello

let fruits = ["apple", "banana", "cherry", true, 12, { name: "Bob", age: 30 }]; // array
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana


// Operators
// Arithmetic Operators
let a = 10, b = 5;
console.log(a + b); // Addition

// Subtraction
console.log(a - b); // Subtraction

// Multiplication
console.log(a * b); // Multiplication

// Division
console.log(a / b); // Division

// Modulus
console.log(a % b); // Modulus

// Exponentiation
console.log(a ** b); // Exponentiation


// Comparison Operators
console.log(a == b); // Equal to
console.log(a != b); // Not equal to
console.log(a > b); // Greater than
console.log(a < b); // Less than
console.log(a >= b); // Greater than or equal to
console.log(a <= b); // Less than or equal to

b = "10";

console.log(a == b); // true (loose equality)
console.log(a === b); // false (strict equality)
console.log(a != b); // false (loose inequality)
console.log(a !== b); // true (strict inequality)

// Logical Operators
//AND-
console.log(true && false); // AND
console.log(true && true); // AND
console.log(false && false); // AND 
console.log(false && true); // AND

//OR
console.log(true || false); // OR   
console.log(true || true); // OR
console.log(false || false); // OR
console.log(false || true); // OR

//NOT
console.log(!true); // NOT
console.log(!false); // NOT
console.log(!!true); // NOT


//Assignment 
let x = 10;
x  += 5; // x = x + 5;
console.log(x); // 15

x  -= 5; // x = x - 5;
console.log(x); // 10 
 x  *= 5; // x = x * 5;
console.log(x); // 50

x  /= 5; // x = x / 5;
console.log(x); // 10   