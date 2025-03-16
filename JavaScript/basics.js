// Variable types -> var, let, const

var a = 100;

a = 120;

a = "JavaScript";

var b = a;

var a = false;

let c = "Welcome to JS!";

// console.log(c);

const pi = 3.14;
// console.log(pi);

// pi = 4.434

// ---------------- DAta types --------------

// 1 - Primitive data types
// 2 - Non Primitive / data types OR Referecne tyes

// Primitive types
// String, Number, Boolean (true|false), null, undefined

// Non-Prmitive / Reference types
// Object, Array, function

// Object
const obj = {
  a: 10,
  b: "20",
  c: true,
  d: null,
  e: undefined,
};

const user = {
  name: "Waqas",
  age: 25,
  address: "Peshawar",
  profession: "Software Engineer",
};

// Array
const arr = [30, 40, 50];

// Operators
// Arithmitic Operators -> +, -, *, /
// Logical Operators -> &&, ||, !
// Assignment Operators -> ==, !=, ===, !==
// Ternary Operators -> ? / :

const x = 10;
const y = "10";

// Conditional Statements
// if else, switch, ternary operators

// if (x === 10) {
//   console.log("X is number which value is 10");
// } else if (x === "10") {
//   console.log("X is string and the value of x is 10");
// } else {
//   console.log("Neither X is 10 not 10 string;");
// }

let z;

x === 10 ? (z = 10) : x === "10" ? (z = "10") : (z = 20);

// Create a function that return marks grade

function grade(numbers) {
  if (numbers >= 80) {
    console.log("A+ Grade");
    return "A+ Grade";
  } else if (numbers >= 70 && numbers < 80) {
    console.log("B Grade");
    return "B Grade";
  } else if (numbers >= 50 && numbers < 70) {
    console.log("C Grade");
    return "C Grade";
  } else {
    console.log("Failed...");
    return "Failed...";
  }
}

// grade(49);

const str = "Welcome to Programming with JavaScript";

// console.log("Length: ", str.length);
// console.log("Access word: ", str.charAt(15));
// console.log("Sub string : ", str.substring(0, 22));
// console.log("Include : ", str.includes("z"));
