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

console.log(Math);

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

console.log(eval("1+5"));
