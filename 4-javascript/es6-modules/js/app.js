// // import * as me from "./me.js";

import Person from "./Person.js";
import mySelf, { myAge, myName } from "./me.js";
import runner from "./runner.js";

// import mySelf, { myAge, myName } from "./me.js";

// import { drive, model, range } from "./car.js";
// import { myAge, myName } from "./me.js";

// // import { myName, myAge } from "./me.js";

// // console.log(myName);
// // console.log(myAge);

// console.log(`My car is ${model}. It can drive ${range}`);

// console.log(myName);
// console.log(myAge);

// console.log(drive());

console.log(mySelf);
console.log(myName);
console.log(myAge);

console.log(runner());

const p1 = new Person("kyaw kayw", 15);
console.log(p1);

const p2 = new Person("zaw zaw", 20);
console.log(p2);
