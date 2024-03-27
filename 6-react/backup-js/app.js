const app = document.querySelector("#app");

// todo UI

// const heading = document.createElement("h1");
// heading.innerText = "Todo App";

// const createForm = document.createElement("form");
// const textInput = document.createElement("input");
// const addBtn = document.createElement("button");
// addBtn.innerText = "Add List";
// createForm.append(textInput);
// createForm.append(addBtn);

// const lists = document.createElement("ul");

// const list1 = document.createElement("li");
// list1.innerText = "Read JS Book";
// lists.append(list1);

// const list2 = document.createElement("li");
// list2.innerText = "Eat less";
// lists.append(list2);

// const list3 = document.createElement("li");
// list3.innerText = "Sleep Early";
// lists.append(list3);

// app.append(heading);
// app.append(createForm);
// app.append(lists);

// function run() {
//   console.log("*");
//   console.log("* *");
//   console.log("* * *");
// }

// run();
// run();
// run();
// run();
// run();

// const tasks = ["read js book", "eat less", "sleep early"];

// const createHeading = (text) => {
//   const heading = document.createElement("h1");
//   heading.innerText = text;
//   return heading;
// };

// const createFrom = () => {
//   const createForm = document.createElement("form");
//   const textInput = document.createElement("input");
//   const addBtn = document.createElement("button");
//   addBtn.innerText = "Add List";
//   createForm.append(textInput);
//   createForm.append(addBtn);
//   return createForm;
// };

// const createListGroup = () => {
//   const lists = document.createElement("ul");
//   lists.setAttribute("id", "listGroup");
//   return lists;
// };

// const createList = (text) => {
//   const list = document.createElement("li");
//   list.innerText = text;
//   return list;
// };

// const renderList = (lists) => {
//   const listGroup = app.querySelector("#listGroup");
//   listGroup.innerHTML = "";
//   lists.forEach((list) => listGroup.append(createList(list)));
// };

// (function () {
//   app.append(createHeading("Todo App"));
//   app.append(createFrom());
//   app.append(createListGroup());
//   renderList(tasks);
// })();

// class Todo {
//   constructor() {
//     this.tasks = ["read js book", "eat less", "sleep early"];
//   }

//   createHeading(text) {
//     const heading = document.createElement("h1");
//     heading.innerText = text;
//     return heading;
//   }

//   createFrom() {
//     const createForm = document.createElement("form");
//     const textInput = document.createElement("input");
//     const addBtn = document.createElement("button");
//     addBtn.innerText = "Add List";
//     createForm.append(textInput);
//     createForm.append(addBtn);
//     return createForm;
//   }

//   createListGroup() {
//     const lists = document.createElement("ul");
//     lists.setAttribute("id", "listGroup");
//     return lists;
//   }

//   createList(text) {
//     const list = document.createElement("li");
//     list.innerText = text;
//     return list;
//   }

//   renderList(lists) {
//     const listGroup = app.querySelector("#listGroup");
//     listGroup.innerHTML = "";
//     lists.forEach((list) => listGroup.append(this.createList(list)));
//   }

//   render() {
//     app.append(this.createHeading("Todo App"));
//     app.append(this.createFrom());
//     app.append(this.createListGroup());
//     this.renderList(this.tasks);
//   }
// }

// const todo = new Todo();
// todo.render();
