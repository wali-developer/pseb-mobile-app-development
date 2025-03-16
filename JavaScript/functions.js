function sum(num1, numb2) {
  const num3 = num1 + numb2;
  return num3;
}

const a = 10;
const b = 20;
const c = sum(99, 50);

// console.log("Result: ", c);

// Create a function that take user details as a parameter and return the user details

function getUserDetails(user) {
  //   console.log("User", user);
  return user;
}

const user = {
  name: "Wali",
  age: 35,
};

getUserDetails(user);

function sum(a) {
  return a;
}

// Arrow function
const test = (a, b) => a;

test();

// High order functions

const parent = (child) => {
  child();
};

const childFun = () => console.log("Child function execeted..");

parent(childFun);
