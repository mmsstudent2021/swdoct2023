// const sum = function (a, b) {
//   return a + b;
// };

// console.log(sum(4, 5));

// const arrowSum = (a, b) => a + b;

// console.log(arrowSum(4, 5));

// const run = function () {
//   return "this is run";
// };

// const arrowRun = () => "this is run";

// console.log(arrowRun());

// const squareArea = function (w) {
//   return w ** 2;
// };

// const arrowSquareArea = (w) => w ** 2;

// const circleArea = function (r) {
//   return Math.PI * r ** 2;
// };

// const arrowCircleArea = (r) => Math.PI * r ** 2;

// console.log(arrowCircleArea(30));

// const area = function (w, h) {
//   return w * h;
// };

// const arrowArea = (w, h) => w * h;

// console.log(arrowArea(15, 50));

// 1994-7-22 date string
// Date object -> current year

// const findAge = function (dateString) {
//   const date = new Date();
//   const currentYear = date.getFullYear();

//   const inputDate = new Date(dateString);
//   const birthYear = inputDate.getFullYear();

//   return currentYear - birthYear;
// };

// const arrowFindAge = (dateString) => {
//   const date = new Date();
//   const currentYear = date.getFullYear();

//   const inputDate = new Date(dateString);
//   const birthYear = inputDate.getFullYear();

//   return currentYear - birthYear;
// };

// console.log(arrowFindAge("1994-07-22"));

const gadgets = [
  { id: 1, name: "Smartphone", price: 599.99, stock: 100, rating: 4.8 },
  { id: 2, name: "Laptop", price: 1299.99, stock: 50, rating: 4.5 },
  { id: 3, name: "Smartwatch", price: 199.99, stock: 75, rating: 4.2 },
  {
    id: 4,
    name: "Noise-Canceling Headphones",
    price: 249.99,
    stock: 30,
    rating: 4.7,
  },
  { id: 5, name: "Fitness Tracker", price: 79.99, stock: 120, rating: 4.6 },
];

console.table(gadgets);

console.table(gadgets.filter(({stock}) => stock >= 100));

// console.table(
//   gadgets.map(({name,price}) => {
//     return {
//       product_name: name,
//       sale_price: price + 100,
//     };
//   })
// );

// const text = "san kyi tar bar byar ma ya buu lar kwawr";

// console.log(
//   text
//     .split(" ")
//     .filter((el) => el.length === 3)
//     .map(el => el.toUpperCase())
//     .join(" ")
// );

// console.table(
//   gadgets
//     .filter((gadget) => gadget.stock >= 100)
//     .map((gadget) => ({ ...gadget, price: gadget.price - 20 }))
//     .map((gadget) => gadget.name)
//     .join("\n")
// );

// console.table(gadgets);

// gadgets.sort((a, b) => a.price - b.price);
// gadgets.sort((a, b) => b.price - a.price);
// gadgets.sort((a, b) => a.name.charCodeAt() - b.name.charCodeAt());

// gadgets.sort((a, b) => b.name.charCodeAt() - a.name.charCodeAt());

// console.table(gadgets);

const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Grapes",
  "Watermelon",
  "Strawberry",
  "Pineapple",
  "Mango",
  "Kiwi",
  "Peach",
];

// fruits.sort((a, b) => b.charCodeAt() - a.charCodeAt());

// // console.log(fruits);

// const chars = ["a", "e", "b", "z", "r", "x"];
// const numbs = [10, 16, 3.2, 0, 39, 53, 2.1, -21, 5];

// console.log(chars);

// chars.sort();
// chars.sort((a, b) => a.charCodeAt() - b.charCodeAt());
// chars.sort((a, b) => b.charCodeAt() - a.charCodeAt());

// console.log(chars);

// console.log(numbs);

// // a-b + ascending
// // 0
// // b-a - descending

// // numbs.sort();
// // numbs.sort((a, b) => a - b);
// // numbs.sort((a, b) => b - a);

// numbs.sort((a, b) => {
//   console.log(a, b);
//   return a - b;
// });

// console.log(numbs);

// console.table(gadgets);

// console.log(gadgets.reduce((pv, cv) => pv + cv.price, 0));

// console.table(gadgets.filter((gadget) => gadget.stock >= 100));

// console.table(
//   gadgets.map((gadget) => {
//     gadget.price += 100;
//     return gadget;
//   })
// );

// console.table(
//   gadgets.map((gadget) => ({ ...gadget, price: gadget.price + 100 }))
// );

// const arr = [];

// arr[0] = "a";
// arr[1] = "b";
// arr[2] = "c";

// console.log(arr);

// const obj = { a: "a", b: "b" };

// obj.c = "c";
// obj.d = "d";
// obj.b = "bbb";

// console.log(obj);

// const myString = "san kyi tar";

// // myString[0] = "a";
// console.log(myString[0]);
// console.log(myString[1]);

// console.log(myString);

// const arr = ["a", "b"];

// console.log(arr);

// arr[2] = "c";
// arr[3] = "d";
// arr.push("e");
// arr.push("f");

// arr.shift();
// arr.shift();

// console.log(arr);

// console.log([...arr, "c", "d"]);

// console.log(arr);

// const obj = { a: "a", b: "b" };

// obj.c = "c";
// obj.d = "d";

// console.log({ ...obj, c: "c", d: "c" });

// obj.b = "bbb";

// console.log({ ...obj, b: "bbb" });

// console.log(obj);

// stock > 100 , discount 20

// class Test {
//   aaa() {
//     console.log("process a");
//     return this;
//   }

//   bbb() {
//     console.log("process b");
//     return this;
//   }

//   ccc() {
//     console.log("process c");
//     return this;
//   }
// }

// const test = new Test();

// console.log(test.aaa().bbb().ccc().aaa().bbb());

// const arr = ["a", "b", "c", "d"];

// const [x, y, z] = arr;

// console.log(x);
// console.log(y);
// console.log(z);

// const obj = { a: "aaa", b: "bbb", c: "ccc" };

// const { a, b } = obj;

// console.log(a);
// console.log(b);
