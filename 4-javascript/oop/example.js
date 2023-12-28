// class Person {
//   constructor(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.prefix = this.gender === "male" ? "Mr." : "Ms.";
//   }
//   intro() {
//     return `I'm ${this.prefix} ${this.name} and ${this.age} year old`;
//   }
// }

// const p1 = new Person("hein htet zan", 29, "male");
// console.log(p1);
// console.log(p1.intro());

// class Student extends Person {
//   constructor(name, age, gender, major) {
//     super(name, age, gender);
//     this.major = major;
//   }
// }

// const st1 = new Student("Mg Mg", 15, "male", "SWD");
// console.log(st1);
// console.log(st1.intro());

// const st2 = new Student("Kyaw Kyaw", 14, "male", "WAD");
// console.log(st2);
// console.log(st2.intro());

// class Monitor extends Student {
//   constructor(name, age, gender, major, room) {
//     super(name, age, gender, major);
//     this.room = room;
//   }

//   #a = "aaa";
//   #b() {
//     return "method b";
//   }
//   c = "ccc";
//   d() {
//     return "method d";
//   }

//   static x = "xxx";
//   static y = "yyy";
//   static z() {
//     return "method z";
//   }
// }

// console.dir(Monitor);
// console.log(Monitor.x);
// console.log(Monitor.z());

// // console.log(Monitor.c);

// const m1 = new Monitor("Zaw Zaw", 16, "male", "SWD", "Room 1");
// console.log(m1);
// console.log(m1.c);
// console.log(m1.name);
// console.log(m1.intro());

// console.log(m1.#a);

// console.dir(Date);
// console.log(Date.now());
// console.log(Date.UTC(2023));
// console.log(Date.parse("1994-07-22"));

// const d = new Date();
// console.dir(d);

// console.dir(Math);

// console.dir(String);
// const string = new String("hello");
// console.log(string);

// console.dir(Audio);
// const audio = new Audio();

// console.dir(audio);

// class BankAccount {
//   constructor(number, name, amount) {
//     this.number = number;
//     this.name = name;
//     this.amount = amount;
//   }
// }

// const ba = new BankAccount(123123, "hein htet zan", 50000);

// console.log(ba);
// ba.amount = 150000;
// console.log(ba.amount);

class BankAccount {
  #balance = 0;
  #record = [];
  #recordIndex = 0;
  constructor(number, name) {
    this.number = number;
    this.name = name;
  }

  // getter
  checkBalance() {
    return this.#balance;
  }

  history() {
    return this.#record;
  }

  // setter
  deposit(amount) {
    this.#balance += amount;
    this.#record[this.#recordIndex++] = "Deposit " + amount;
    return "Deposit " + amount;
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      this.#record[this.#recordIndex++] = "Withdraw " + amount;

      return "Withdraw " + amount;
    }
    this.#record[this.#recordIndex++] = "Not enough balance";

    return "Not enough balance";
  }
}
const ba = new BankAccount(123123, "Hein Htet Zan");
console.log(ba);
console.log(ba.deposit(50000));
console.log(ba.deposit(150000));
console.log(ba.deposit(4000));
console.log(ba.checkBalance());
console.log(ba.withdraw(65000));
console.log(ba.checkBalance());
console.log(ba.withdraw(665000));
console.log(ba.checkBalance());
console.table(ba.history());
