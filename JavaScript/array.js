// Arrays

const numbers = [21, 30, 40, 50, 60, 70];
const numbers2 = [33, 99, 101];

const num1 = numbers[0];
const num2 = numbers[1];

numbers[2] = 45;
numbers[numbers.length - 1] = 100;

// Array manipulations

// console.log("Size of Array: ", numbers.length);
// console.log("Number: ", numbers.at(5));

const numbers3 = numbers.concat(numbers2);

// console.log(numbers3);

numbers.push(500);
numbers.pop();

numbers.shift();
// numbers.unshift(5);

// console.log("Is include: ", numbers.includes(150));
// console.log("Slice array: ", numbers.slice(1, 5));

const someArr = numbers.some((number, index, array) => number > 100);
const everyArr = numbers.every((number, index, array) => number > 20);

numbers.forEach((num) => num * 2);

const mapArr = numbers.map((ele) => ele * 2);

const evenNumber = numbers.filter((num) => num % 2 === 0);
// console.log("Even numbers: ", evenNumber);

const reduceArr = numbers.reduce(
  (accomulator, currItem) => currItem + accomulator,
  0
);
// console.log("Sum of numbers: ", reduceArr);

const foundNumber = numbers.find((num) => num === 50);

// console.log("Found: ", foundNumber);

// Destructring Array
const users = ["Ali", "Usama", 12, null, "Sameer"];

const [, , ele3, ele4] = users;
console.log(ele3, ele4);
