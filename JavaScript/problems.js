const numbers = [5, 10, 15, 20, 25, 30, 10, 35, 40, 10, 45, 50, 10, 35, 10];

// Create a function to calculate the sum of all numbers in array using loops.

const sumOfAll = (nums) => {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }

  console.log("SUM: ", sum);
  return sum;
};

sumOfAll(numbers);

// Create a function to find even numbers in an array using loops.

const evenNumbers = () => {
  const even = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      even.push(numbers[i]);
    }
  }

  console.log("Even Numbers: ", even);
  return even;
};

// evenNumbers();

// Create a function named countOccurence that will count the value of the number in an array.

const countOccurence = (arr, ele) => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
      count = count + 1;
    }
  }

  console.log(` Count of the number ${ele} is array is:  `, count);
  return count;
};

// countOccurence(numbers, 35);

// Default and Rest Operator

// Rest Operator
const ftn = (...args) => {
  console.log("Arguments: ", args);
};

const nums = [10, 20, 30, 40, 50, 60, 70];
const user = [{ name: "Ali", age: 20 }];

// spread operators
ftn(...nums);
