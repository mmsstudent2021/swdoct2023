// classes

// const obj = {
//   a: "aaa",
//   b: "bbb",
//   x() {
//     return "x";
//   },
//   y() {
//     return "y";
//   },
// };

// console.log(obj);

// class Test {
//   // properties or fields
//   a = "aaa";
//   b = "bbb";

//   // methods
//   x() {
//     return "x";
//   }

//   y() {
//     return "y";
//   }
// }

// // console.log(Test);
// // class to obj (instantiate)

// const test = new Test();
// console.log(test);

// class Student {
//   // name,age,gender,major
//   name;
//   age;
//   gender;
//   major;
// }

// const st = new Student();
// st.name = "mg mg";
// st.age = 15;
// st.gender = "male";
// st.major = "SWD";
// console.log(st);

// const st2 = new Student();
// st2.name = "su su";
// st2.age = 14;
// st2.gender = "female";
// st2.major = "SWD";
// console.log(st2);

// initialization

// class Test {
//   x() {
//     console.log("x");
//   }

//   y() {
//     console.log("y");
//   }

//   constructor(a, b) {
//     console.log("constructor", a, b);
//   }
// }

// const test = new Test("aaa", "bbb");
// test.x();
// test.y();

// class Test {
//   a = "aaa";
//   b = "bbb";
//   constructor() {
//     this.c = "ccc";
//   }
//   x() {
//     console.log(this);
//     return "method x";
//   }
// }

// const test = new Test();
// console.log(test.x());

// const obj = {};
// obj.a = "aaa";
// obj.b = "bbb";
// obj.c = "ccc";
// console.log(obj);

// class Student {
//   constructor(inputName, inputAge, inputGender, inputMajor) {
//     this.name = inputName;
//     this.age = inputAge;
//     this.gender = inputGender;
//     this.major = inputMajor;
//   }

//   birthYear() {
//     return 2023 - this.age;
//   }
// }

// const st = new Student("mg mg", 15, "male", "SWD");
// console.log(st);
// console.log(st.birthYear());
// console.log(st.name);

// const st2 = new Student("Su Su", 14, "female", "SWD");
// console.log(st2);
// console.log(st2.birthYear());

// const st3 = new Student("mya mya", 15, "female", "WAD");
// console.log(st3);

// const st4 = new Student("Kyaw Kyaw", 14, "male", "SWD");
// console.log(st4);

// class Test {
//   a = "aaa";
//   #b = "bbb"; // private property
//   static d = "ddd";

//   constructor() {
//     this.c = "ccc";
//   }
//   x() {
//     console.log(this);
//     return "method x";
//   }
//   z() {
//     console.log(this.#b);
//     return "method z";
//   }

//   static y() {
//     return "method y";
//   }
// }

// console.log(Test.d);
// console.log(Test.y());

// const test = new Test();
// console.log(test);
// console.log(test.a); // access property a
// // console.log(test.#b);
// console.log(test.c);
// console.log(test.x());
// console.log(test.z());

// access modifier (public,private)

// class Person {
//   constructor(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
// }

// class Student extends Person {
//   constructor(name, age, gender, major) {
//     super(name, age, gender);
//     this.major = major;
//   }
// }

// const st = new Student("Mg Mg", 15, "male","SWD");
// console.log(st);
