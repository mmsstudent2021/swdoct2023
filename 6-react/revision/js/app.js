// const numbers = [4, 2, 5, 3, 2, 7, 1, 4];

// goal sum of element

// let sum = 0; // state

// // for statement

// for (el of numbers) {
//   //   console.log(el);
//   sum += el;
// }

// console.log(sum);

// new array without duplicate element

// const result = []; // state

// for (el of numbers) {
//   console.log(el);

//   if (!result.includes(el)) {
//     result.push(el);
//   }
// }

// console.log(result);

// new array with even element

// const result = [];

// for (el of numbers) {
//   if (el % 2 === 0) {
//     result.push(el);
//   }
// }

// console.log(result);

// const numbers = [4, 2, 5, 3, 2, 7, 1, 4];

// console.log(numbers.reduce((p, c) => p + c, 0));
// console.log(new Set(numbers));
// console.log(numbers.filter(el => el%2 === 0));

// function area(w, b) {
//   return w * b;
// }

// console.log(area(15, 50));
// console.log(area(15, 50));
// console.log(area(15, 50));
// console.log(area(15, 50));
// console.log(area(15, 50));
// console.log(area(15, 50));

// let total = 0;

// function buy(amount) {
//   total += amount;
//   return amount;
// }

// console.log(buy(100));
// console.log(buy(100));
// console.log(buy(100));
// console.log(buy(100));

// console.log(total);

// const filter = (arr, callback) => {
//   const result = [];
//   for (el of arr) {
//     if (callback(el)) {
//       result.push(el);
//     }
//   }
//   return result;
// };

// console.log(filter([1, 2, 3, 4, 5, 6], (x) => x > 3));

// mutable way
// const arr = ["a", "b", "c"];
// console.log(arr);
// arr[3] = "d";
// console.log(arr);

// const obj = { a: "a", b: "b", c: "c" };
// console.log(obj);
// obj.b = "zzz";
// console.log(obj);

// const numbers = [4, 7, 2];

// console.log(numbers);
// for (index in numbers) {
//   console.log(index, numbers[index]);
//   numbers[index] = numbers[index] * 2;
// }
// console.log(numbers);

// immutability
// const arr = ["a", "b", "c"];
// console.log(arr);
// console.log([...arr, "d"]);
// console.log(arr);
// const obj = { a: "a", b: "b", c: "c" };

// console.log({ ...obj, b: "zzz" });

// console.log(obj);

// const numbers = [4, 7, 2];
// console.log(numbers);
// console.log(numbers.map((el) => el * 2));
// console.log(numbers);

// function factorial(n) {
//   console.log(n);
//   if (n === 0) {
//     return 1
//   }
//   return n * factorial(n - 1);
// }

// console.log(factorial(5));
