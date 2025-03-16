// Loops -> for, while, for-in, for-of

const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i] * 2);
// }

// While
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// For in
// for (let key in arr) {
//   console.log(key);
// }

for (let num of arr) {
  console.log(num);
}
