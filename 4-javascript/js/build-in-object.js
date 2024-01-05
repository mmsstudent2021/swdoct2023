// console.dir(Date);
// console.log(Date.now());
// console.log(Date.parse("2021-02-1"));

// const d = new Date("1994-07-22");
// const d = new Date(1994, 6, 22);
// const d = new Date();
// console.dir(d);
// console.dir(d.toDateString());
// console.dir(d.toTimeString());
// console.dir(d.toLocaleDateString());
// console.dir(d.toLocaleTimeString());

// console.log(d.getFullYear());
// console.log(d.getMonth());
// console.log(d.getDay());
// console.log(d.getDate());

// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.getMilliseconds());

// console.log(d.getTime());

// const d = new Date();
// console.log(d.toLocaleDateString());
// d.setHours(d.getHours() + 300);
// console.log(d);
// console.log(d.toLocaleDateString());

// next blood donation date
// from current date to next 4 months

// d.setMonth(d.getMonth() + 4);
// console.log(d.toLocaleDateString());

// th 50hr/ 2hr = 25day

// d.setDate(d.getDate() + 25);

// console.log(d.toLocaleDateString());

// 12.15.2020 - 1000 ani

// const md = new Date("2020-12-15");
// console.log(md);
// md.setDate(md.getDate() + 1000);
// console.log(md);

// const myName = "hein htet zan";
// console.log(myName);

// console.dir(String);
// console.log(String.fromCharCode(65, 78, 84));

// const st = new String("San Kyi Tar Par Byar");

// console.log(st.split(" "));

// console.log(st);
// console.log(st.length);
// console.log(st.length);
// console.log(st[0]);
// console.log(st[1]);
// console.log(st[2]);

// console.log(st.substr(0, 7));
// console.log(st.substring(4, 8));
// console.log(st.slice(7));

// console.log(st.search("kyi"));

// console.log(st.replace("Kyi", "aaa"));
// console.log(st.replace("ar", "zzz"));
// console.log(st.replaceAll("ar", "zzz"));

// console.log(st.toUpperCase());
// console.log(st.toLocaleLowerCase());

// const newSt = st.trim();
// const newSt = st.trimEnd();
// const newSt = st.trimStart();
// console.log(newSt);
// console.log(newSt.length);

// const coupon = "A4"; // 00A4

// console.log(coupon.padStart(8, "X"));
// console.log(coupon.padEnd(8, "O"));

// string to array

// console.dir(Number);
// console.dir(Number.MAX_SAFE_INTEGER);
// console.dir(Number.MAX_VALUE);
// console.dir(Number.MIN_SAFE_INTEGER);
// console.dir(Number.MIN_VALUE);
// console.log(undefined / 2);
// console.log(Number.isNaN(undefined / 2));

// console.log(5 / 2);
// console.log(Number.isNaN(5 / 2));

// console.log(5 / 0);
// console.log(Number.isFinite(5 / 0));

// console.log(Number.isInteger(123.6));

// console.log(Number.parseFloat(15.123));
// console.log(Number.parseInt(15.5));

// console.log(Number.parseInt("12Kyat"));
// console.log(Number.parseInt("230.45lb"));
// console.log(Number.parseFloat("230.45lb"));
// console.log(Number.parseFloat("120$"));

// const num = new Number(45000.6378433);

// console.log(num);
// console.log(num.toFixed(1));
// console.log(num.toFixed(2));
// console.log(num.toFixed(3));
// console.log(num.toExponential(2));
// console.log(num.toString());

// console.log(Math);

// const circleArea = function (radius) {
//   return Math.PI * r ** 2;
// };

//sin,cos,tan

// console.log(Math.log(123));

// console.log(Math.floor(5.94));
// console.log(Math.ceil(5.14));

// console.log((Math.random() * 10).toFixed());
// console.log((Math.random() * 100).toFixed());
// console.log((Math.random() * 1000).toFixed());

// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// console.log(getRndInteger(1,6));

// console.log(Math.pow(2, 8));
// console.log(Math.sqrt(16));

// console.log(Math.min(1, 5, -3, 7, 1.5));
// console.log(Math.max(1, 5, -3, 7, 1.5));

// console.log(Math.round(45.6344));

// console.log(parseInt("1200Kyat"));

// console.log(eval("1+5"));

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
// };

// console.log(Object.keys(person));
// console.log(Object.values(person));

// console.log(person);

// console.dir(Object);

// function rectangleArea(x, y) {
//   console.log(arguments);
//   return x * y;
// }

// console.log(rectangleArea(15, 50, 3, 9, 10));

// const circleArea = function(r){
//     return Math.PI * r ** 2;
// }

// console.dir(Function);

// const run = new Function("a", "b", "return a+b;");

// console.log(run(5, 9));

// console.dir(run);

// console.log(run.call(null, 4, 5));

// console.log(run.bind(null, 3, 8).apply());

// console.dir(Array);

// const arr = ["a", "b", "c"];
// console.log(arr);

// const fruits = new Array("apple", "banana", "mango", "orange");
// console.log(fruits);

// const fruits = [
//   "Apple",
//   "Banana",
//   "Orange",
//   "Grapes",
//   "Watermelon",
//   "Strawberry",
//   "Pineapple",
//   "Mango",
//   "Kiwi",
//   "Peach",
// ];

// const chars = ["a", "e", "b", "r", "x"];
// const numbs = [1, 6, 2, 0, 3, 5];

// console.log(
//   numbs.some(function (el) {
//     return el > 5;
//   })
// );

// console.log(
//   numbs.every(function (el) {
//     return el < 5;
//   })
// );

// console.log(
//   numbs.reduce(function (pv, cv) {
//     console.log(pv, cv);
//     return pv + cv;
//   }, 0)
// );

// console.log(
//   chars.reduce(function (pv, cv) {
//     console.log(pv, cv);
//     return pv + cv;
//   }, "")
// );

// const gadgets = [
//   { id: 1, name: "Smartphone", price: 599.99, stock: 100, rating: 4.8 },
//   { id: 2, name: "Laptop", price: 1299.99, stock: 50, rating: 4.5 },
//   { id: 3, name: "Smartwatch", price: 199.99, stock: 75, rating: 4.2 },
//   {
//     id: 4,
//     name: "Noise-Canceling Headphones",
//     price: 249.99,
//     stock: 30,
//     rating: 4.7,
//   },
//   { id: 5, name: "Fitness Tracker", price: 79.99, stock: 120, rating: 4.6 },
//   // Add more gadgets as needed
// ];

// console.table(gadgets);

// console.log(
//   gadgets.reduce(function (pv, cv) {
//     // console.log(cv.price);
//     return pv + cv.price;
//   }, 0)
// );

// const saleGadgets = gadgets.filter(function (el) {
//   // return el.price < 500;
//   // return el.price > 1000;
//   return el.id === 3;
//   // return el.id === 3 || el.id === 5;
// });

// console.log(saleGadgets);

// console.log(
//   gadgets.find(function (el) {
//     // return el.id === 3;
//     return el.price < 500;
//   })
// );

// console.log(
//   gadgets.findIndex(function (el) {
//     // return el.id === 3;
//     return el.price < 500;
//   })
// );

// const saleGadgets = gadgets.map(function (el) {
//   // el.price = el.price + 10;
//   // console.log(el);
//   // console.log(el.price);
//   el.price += 100;
//   el.rating = 5;
//   return el;
// });

// console.table(saleGadgets);

// console.log(numbs);

// const r = numbs.map(function (el, index, arr) {
//   console.log(el, index);
//   return el * 2;
// });

// console.log(r);

// chars.forEach(function (el) {
//   console.log(el);
// });

// fruits.forEach(function (el) {
//   console.log(el);
// });

// for (el of chars) {
//   console.log(el);
// }

// const result = chars.concat(numbs).concat(fruits).concat(numbs);
// const result = [...chars, ...numbs, "aaa", "bbb", "ccc", ...fruits];

// console.log(result);

// const obj = { a: "aaa", b: "aaa", c: "ccc" };
// const numObj = { x: 1, y: 5, z: 3 };

// const myObj = { ...obj, f: 100, ...numObj };
// const myObj = { ...obj, b: "123" };
// console.log(myObj);

// console.log(fruits);

// console.log(fruits.slice(1, 5));
// console.log(fruits.splice(1, 3));
// console.log(fruits.splice(1, 3, "aaa", "bbb", "ccc", "ddd", "eee"));

// console.log(fruits);

// console.log(fruits.includes("Apple"));
// console.log(fruits.includes("apple"));
// console.log(fruits.includes("ant"));

// console.log(fruits.indexOf("Kiwi"));
// console.log(fruits.indexOf("Apple"));
// console.log(fruits.indexOf("Ant"));

// console.dir(Array);

// console.log(Array.isArray([]));
// console.log(Array.isArray("mg mg"));

// console.log(fruits.length);
// console.log(fruits.toString());
// console.log(fruits.join(" | "));

// console.log(fruits);

// // console.log(fruits.pop());
// // console.log(fruits.pop());
// // console.log(fruits.pop());
// // console.log(fruits.shift());
// // console.log(fruits.shift());
// // console.log(fruits.shift());

// fruits.push("xxx");
// fruits.push("yyy");
// fruits.push("zzz");

// fruits.unshift("aaa");
// fruits.unshift("bbb");
// fruits.unshift("ccc");

// console.log(fruits);

// fruits.sort();// a to z
// fruits.reverse()

// console.log(fruits);

// const mixedArray = [
//   42,
//   "Hello",
//   3.14,
//   "World",
//   7,
//   "JavaScript",
//   10,
//   "Coding",
//   "ant",
//   5.5,
//   "Array",
// ];

// console.log(mixedArray);

// mixedArray.sort();

// console.log(mixedArray);

// const sumAll = function (...all) {
//   // console.log(arguments);
//   console.log(all);
//   let total = 0;
//   for (x of all) {
//     total += x;
//   }

//   return total;
// };

// console.log(sumAll(...numbs));

// const modifyArray = function (arr, logic) {
//   const result = [];

//   for (el of arr) {
//     result.push(logic(el));
//   }

//   return result;
// };

// console.log(numbs);

// const logic = function (el) {
//   return el + 10;
// };

// console.log(modifyArray(numbs, logic));

// console.dir(Array);
