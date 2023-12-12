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
  return result + " MMK";
}

// console.log(toMMK(200,"USD"));
// console.log(toMMK(1450,"SGD"));
// console.log(toMMK(50,"EUR"));

// 500000 MMK to USD ?
// 15000 MMK to SGD ?
// 40000 MMK to EUR ?

function fromMMK(amount, toCurrency) {
  const exchangeRate = rates[toCurrency];
  const result = amount / exchangeRate;
  // return result + " " + toCurrency;
  return `${result} ${toCurrency}`;
}

// console.log(fromMMK(500000,"USD"));
// console.log(fromMMK(15000,"SGD"));
// console.log(fromMMK(40000,"EUR"));

// 500USD to EUR
// 14SGD to USD
// 160EUR to SGD
// function exchange(amount,from,to){

// }

const fruits = {
  orange: 500,
  mango: 1200,
  banana: 200,
  apple: 450,
  lime: 50,
};

const records = [];
let recordIndex = 0;
let total = 0;

function buy(fruit, quantity) {
  const price = fruits[fruit];
  const cost = price * quantity;
  total += cost;
  records[recordIndex++]={
    fruit,
    price,
    quantity,
    cost
  }
  return `${fruit}   | ${quantity}     | ${cost} mmk`;
}

function tax(totalCost, taxPercentage = 5) {
  return totalCost * (taxPercentage / 100);
}

console.log(buy("apple", 5));
console.log(buy("mango", 2));
console.log(buy("lime", 4));
console.log(buy("banana", 5));

console.table(records);

console.log("Cost Total",total);
console.log("Tax ",tax(total));
console.log("Net Total", total + tax(total));

// fruit  | price | quantity | total
// ==================================
// orange | 500   | 5        | 2500
// orange | 500   | 5        | 2500
// orange | 500   | 5        | 2500
// ==================================
// total                     | 7500
