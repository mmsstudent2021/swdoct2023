// function run() {
//   console.log("*");
//   console.log("* *");
//   console.log("* * *");
//   return "triangle";
//   console.log("hello");
// }

// console.log(run());

// find my bd year, u must need to know age
// logic => 2023 - age

// my age - 29
// mgmg age - 15
// su su age - 18
// hla hla age - 25

// function findBirthYear(currentAge=0,name="My test"){
//     // console.log(currentAge);
//     const currentYear = 2023;
//     const birthYear = currentYear - currentAge;
//     return `${name} was born in ${birthYear}`;
// }

// console.log(findBirthYear(29,"hein htet zan"));
// console.log(findBirthYear(15, "mg mg"));
// console.log(findBirthYear(18, "su su"));
// console.log(findBirthYear(25, "hla hla"));

// console.log(findBirthYear());

//

// function area(width=0, breadth=0) {
//     const result = width * breadth;
//   return `width ${width}ft \nbreadth ${breadth}ft\n-------\narea ${result} sqft`;
// }

// console.log(area(17,60));
// console.log(area(17,50));
// console.log(area(25,50));
// console.log(area());

// const arr = [];
// const obj = {};

// console.log(typeof arr);
// console.log(typeof obj);

// const fruits = ["apple","orange","mango","banana","lemon"];
// //console.log(fruits[2]);// access element
// fruits[2] = "lime" // overwrite element
// console.log(fruits);
// console.log(typeof fruits);

// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[0]);

// const arr = [];

// arr[0] = "aaa";
// arr[1] = "bbb";
// arr[2] = "ccc";
// arr[3] = "ddd";
// arr[4] = "eee";
// // arr[2] = "zzz";
// // arr[10] = "xxx"

// console.log(arr);

// obj (key : value) set
// myself
// name : "hein htet zan"
// age : 29
// township : "hlaing"

// car
// model : toyota bz3
// eng : 1.5
// color : ["gray","white","black"]

// const myself = {
//     name : "hein htet zan",
//     age : 29,
//     township : "hlaing",
//     job : "developer",
//     skill : ["html","css","js"]
// }

// console.log(myself);
// console.log(typeof myself);

// // access property
// console.log(myself["name"]);
// console.log(myself["age"]);
// console.log(myself["township"]);

// // dot
// console.log(myself.name);
// console.log(myself.age);
// console.log(myself.job);

// // overwrite
// myself.name = "Ko Htet";
// myself.age = 24;
// console.log(myself);

// const obj = {};

// obj["a"] = "aaa";
// obj.b = "bbb";
// obj.c = "ccc";
// obj.d = "ddd";
// obj.c = "zzz";

// console.log(obj);

// const x = 5;
// const y = 10;

// console.log(x > y);
// console.log(x < y);

// console.log(x == y);
// console.log(x == 5);
// console.log(x == "5");

// //strict mode

// console.log(x === 5);
// console.log(x === "5");

// const x = null;
// console.log(x);

// let x;
// console.log(x);

// const name = "mg mg";
// let age = 15;
// let township = "kyayk myaung";

// let pocketMoney = 200;

// const orange = 50;

// pocketMoney -= orange;

// console.log(pocketMoney);

// const bag = ["Myanmar book", "Eng Book", "Bio Book"];
// let pen = null;

// const canMgMgFriSmoke = true;
// const canMgMgSmoke = false;

// // const mgmgInfo = {
// //     name : name,
// //     age : age,
// //     township : township
// // }

// const st1 = {
//   name,
//   age,
//   township,
// };

// console.log(st1);

// const st2 = {
//     name : "kyaw kyaw",
//     age : 18,
//     township : "hlaing"
// }

// const st3 = {
//     name : "zaw zaw",
//     age : 17,
//     township : "tamwe"
// }

// const st4 = {
//     name : "mya mya",
//     age : 16,
//     township : "sanchaung"
// }

// const students = [st1,st2,st3,st4]

// console.log(students);

// console.table(students);

// area

// const records = [];
// let recordIndex = 0;
// // records[recordIndex++] = "aaa";

// console.log(records);

// function area(width, height) {
//   const resultArea = width * height;
//   records[recordIndex++] = {
//     width: width + "ft",
//     height: height + "ft",
//     area: resultArea + "sqft",
//   };
//   return resultArea + "sqft";
// }

// console.log(area(17,60));
// console.log(area(25,50));
// console.log(area(12,55));
// console.log(area(15,60));

// console.table(records);

const rates = {
  USD: 2100,
  SGD: 1500,
  EUR: 2200,
};

// 200 USD to mmk
// 1450 SGD to mmk
// 50 EUR to mmk

function toMMK(amount, fromCurrency) {
  const exchangeRate = rates[fromCurrency];
  const result = amount * exchangeRate;
  return result;
}

// console.log(toMMK(200,"USD"));
// console.log(toMMK(1450,"SGD"));
// console.log(toMMK(50,"EUR"));

// 500000 MMK to USD ?
// 15000 MMK to SGD ?
// 40000 MMK to EUR ?

// function fromMMK(amount, toCurrency) {
//   const exchangeRate = rates[toCurrency];
//   const result = amount / exchangeRate;
//   // return result + " " + toCurrency;
//   return result;
// }

// console.log(fromMMK(500000,"USD"));
// console.log(fromMMK(15000,"SGD"));
// console.log(fromMMK(40000,"EUR"));

// const fruits = {
//   orange: 500,
//   mango: 1200,
//   banana: 200,
//   apple: 450,
//   lime: 50,
// };

// const records = [];
// let recordIndex = 0;
// let total = 0;

// function buy(fruit, quantity) {
//   const price = fruits[fruit];
//   const cost = price * quantity;
//   total += cost;
//   records[recordIndex++] = {
//     fruit,
//     price,
//     quantity,
//     cost,
//   };
//   return `${fruit}   | ${quantity}     | ${cost} mmk | ${tax(cost)}`;
// }

// function tax(totalCost, taxPercentage = 5) {
//   return totalCost * (taxPercentage / 100);
// }

// console.log(buy("apple", 5));
// console.log(buy("mango", 2));
// console.log(buy("lime", 4));
// console.log(buy("banana", 5));

// console.table(records);

// console.log("Cost Total",total);
// console.log("Tax ",tax(total));
// console.log("Net Total", total + tax(total));

// fruit  | price | quantity | total
// ==================================
// orange | 500   | 5        | 2500
// orange | 500   | 5        | 2500
// orange | 500   | 5        | 2500
// ==================================
// total                     | 7500

// 500USD to EUR
// 14SGD to USD
// 160EUR to SGD

function exchange(amount, from, to) {
  // const fromCurrencyRate = rates[from];
  // const mmk = amount * fromCurrencyRate;
  const mmk = toMMK(amount, from);
  // const toCurrencyRate = rates[to];
  // const result = mmk / toCurrencyRate;
  return `${fromMMK(mmk, to)} ${to}`;
}

// console.log(exchange(500, "USD", "EUR"));
// console.log(exchange(14, "SGD", "USD"));
// console.log(exchange(160, "EUR", "SGD"));

// let x = 5;
// let y = 10;
// const a = [1, 2, 3];
// const b = { a: 1, b: 2, c: 3 };
// console.log("a array",a);
// const c = a;
// console.log("c array",c);
// a[0] = 100
// console.log("a array",a);
// console.log("c array",c);

// let x = 5;
// let y = 10;
// console.log("x",x);
// let z = x;
// console.log("z",z);
// x = 7;
// console.log("x",x);
// console.log("z",z);

// let x = {};
// let y = {};

// console.log(x === y);

// function run(x,y){
//   return x * y;
// }

// run(4,5)

// const run = function (x, y) {
//   return x * y;
// };

// console.log(run(4,5));

// (function(){
//   console.log("I'm iife");
// })()

// console.log(
//   `I'm hein htet zan and ${(function () {
//     return 29;
//   })()} years old`
// );

// function run(){
//   let x = 5;
//   console.log(x);
// }
// run()
// console.log(x);

// const y = 10;

// {
//   console.log(y);
// }

// function run(){
//   let x = 5;
//   console.log(x);
//   console.log(y);
// }

// run()
// // console.log(x);
// console.log(y);

// console.log(run());

// function run(){
//   return "I'm run"
// }

// console.log(y);

// let y = 10;

// console.log(run());

// const run = function(){
//   return "this is run"
// }

// const obj = {
//   a: "aaa",
//   b: "bbb",
//   c: "ccc",
//   // run: function () {
//   //   return "I'm run";
//   // },
//   run(){

//     return "I'm run "+this.test()
//   },
//   test(){
//     return "I'm test"
//   }
// };

// console.log(obj.a);
// console.log(obj.b);
// console.log(obj.c);
// console.log(obj.z);
// console.log(obj.run());
// console.log(obj.test());

// condition - boolean - true or false

// if
// else
// else if

// let x;

// if(false){

//   x = 5;

//   console.log("*");
//   console.log("* *");
//   console.log("* * *");
// }
// else {
//   x = 10;
//   console.log("* * false * *");
// }

// console.log(x);

// function run() {
//   if (false) {
//     return "true run";
//   }
//   return "false run";
// }

// console.log(run());

// const mark = 40;

// asc => 1,2,3, ..... , 10
// desc => 10,9,8, .... ,1

// if(mark>= 80){
//   console.log("distention");
// }else if(mark >= 40){
//   console.log("pass");
// }else if(mark < 40){
//   console.log("fail");
// }

// if(mark >= 40){
//   console.log("passed");
// }else{
//   console.log("fail");
// }

// exp 1 - start
// exp 2 - end
// exp 3 - increment, decrement

// for (let i = 1; i <= 10; i++) {
//   // if (i === 5) break;
//   // if (i % 2 === 0) continue;
//   // console.log(i);
// }

// for(let i=100; i >= 0; i-=10){
//   console.log(i);
// }

// const fruits = ["apple", "banana", "orange", "grape", "kiwi", "lemon"];

// console.log(fruits);
// for (let i = 0; i < fruits.length; i++) {
//   console.log(i, fruits[i]);
// }

// for in
// for (key in fruits) {
//   console.log(key, fruits[key]);
// }

// for of
// for (x of fruits) {
//   console.log(x);
// }

// const car = {
//   make: "Toyota",
//   model: "Camry",
//   year: 2022,
//   color: "Silver",
//   isAutomatic: true,
// };

// for (key in car) {
//   console.log(key, car[key]);
// }

let total = 0;
const itemsArray = [
  { id: 1, description: "Laptop Backpack", price: 79.99 },
  { id: 2, description: "Wireless Headphones", price: 129.99 },
  {
    id: 3,
    description: "Smartphone Stand ",
    price: 24.99,
  },
  { id: 4, description: "Water Bottle", price: 34.99 },
  { id: 5, description: "Notebook Cover", price: 49.99 },
];

// for (el of itemsArray) {
//   total += el.price;
//   console.log(`${el.description} : ${el.price}`);
// }
// console.log("=====================");
// console.log("total", total);

// for (el of itemsArray) {
//   for (x in el) {
//     if (x === "id") continue;
//     console.log(x," : ", el[x]);
//   }
//   console.log("============");
// }

// var x = 5;
// console.log(x);

// {
//   var x = 5;
// }
// console.log(x);

// if (true) {
//   var x = 10;
// }

// console.log(x);

// for ( i = 0; i < 5; i++) {
//   console.log(i);
// }

// console.log("out of loop", i);

// const x = 5;
// const y = 10;

// console.log(x > y);
// console.log(x < y);
// console.log(x == y);

// console.log(x == '5');

// console.log(x === 5);

// console.log(x != y);
// console.log(x !== 5);

// if(true){

// }

// console.log(true ? "it is true" : "it is false");

// const x = false ? 5 : 10;
// console.log(x);

// const pocketMoney = 500;

// const result = pocketMoney > 1500 ? "taxi" : "bus";

// console.log(result);

// console.log(true);
// console.log(!true);
// console.log(!!true);
// console.log(!!!true);
// console.log(false);
// console.log(!false);

// const wakeUpTime = 10;

// if (wakeUpTime > 8) {
//   console.log("U will be punish");
// }

// const pocketMoney = 500;

// if (pocketMoney > 200 * 2) {
//   console.log("by bus");
// } else {
//   console.log("by walking");
// }

// const comingTime = 12;

// if (comingTime <= 10) {
//   console.log("U will get to school");
// } else {
//   console.log("U will late");
// }

// const examMark = 70;
// const viper = 50;

// if (examMark >= 60 && viper >= 60) {
//   console.log("U will pass entrance exam");
// } else {
//   console.log("U fail");
// }

// const age = 15;
// const nrc = "n";

// if (age > 18 && nrc === "n") {
//   console.log("U can vote");
// } else {
//   console.log("U cannot vote");
// }

// const bus = 100;

// if (bus === 20 || bus === 65) {
//   console.log("U will reach MMS IT");
// } else {
//   console.log("U will not reach");
// }

const canIPassEntrance = function (examMark, viperMark) {
  if (examMark >= 60 && viperMark >= 60) {
    return "U will pass Entrance";
  }
  return "U will not pass";
};

// console.log(canIPassEntrance(50, 80));
// console.log(canIPassEntrance(80, 80));
// console.log(canIPassEntrance(50, 40));

const choseBus = function (no) {
  if (no === 20 || no === 65) {
    return "U will reach MMS IT";
  }
  return "U will not reach";
};


// console.log(choseBus(20));
// console.log(choseBus(40));
// console.log(choseBus(65));