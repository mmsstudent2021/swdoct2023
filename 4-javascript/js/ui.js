const app = document.querySelector("#app");

const heading = document.createElement("h1");
heading.innerText = "Min Ga Lar Par";
heading.classList.add("heading");
heading.id = "myHeading";
heading.title = "My Heading";
heading.setAttribute("data-id", 3);
// console.log(heading);

const lists = document.createElement("ul");

const createList = (text) => {
  const list = document.createElement("li");
  list.innerText = text;
  return list;
};

// const list1 = document.createElement("li");
// list1.innerText = "Apple";

// const list2 = document.createElement("li");
// list2.innerText = "Orange";

// const list3 = document.createElement("li");
// list3.innerText = "Mango";

// const list4 = document.createElement("li");
// list4.innerText = "Lemon";

// lists.append(list1);
// lists.append(list2);
// lists.append(list3);
// lists.append(list4);

const textInput = document.createElement("input");
textInput.type = "text";
textInput.placeholder = "Say something";

const btn = document.createElement("button");
btn.innerText = "add new";
btn.onclick = () => {
  //   console.log("hello U click");
  console.log(textInput.value);
  lists.append(createList(textInput.value));
  textInput.value = null;
};
// console.dir(btn);

// console.log(textInput);
// console.log(lists);
// document.body.append(heading);
app.append(heading);
// app.append(lists);
// lists.before(heading)
// lists.after(textInput)
// textInput.after(btn)
// app.append(textInput);
// app.append(btn);

// const createOption = (text, value) => {
//   const option = document.createElement("option");
//   option.innerText = text;
//   option.value = value;
//   return option;
// };

// console.log(createOption("Myanmar","MM"));

// console.log(new Option("Myanmar", "MM"));
// const img = new Image();
// img.src = "images/love.gif";
// console.log(img);

const table = document.createElement("table");

const thead = table.createTHead();

const theadRow = thead.insertRow();

const theadCell0 = theadRow.insertCell(0);
theadCell0.innerText = "No";

const theadCell1 = theadRow.insertCell(1);
theadCell1.innerText = "Name";

const theadCell2 = theadRow.insertCell(2);
theadCell2.innerText = "Age";

const tbody = table.createTBody();

const row0 = tbody.insertRow(0);
const row0cell0 = row0.insertCell(0);
row0cell0.innerText = 1;

const row0cell1 = row0.insertCell(1);
row0cell1.innerText = "kayw kyaw";

const row0cell2 = row0.insertCell(2);
row0cell2.innerText = 18;

const row1 = tbody.insertRow(1);
const row1cell0 = row1.insertCell(0);
row1cell0.innerText = 2;

const row1cell1 = row1.insertCell(1);
row1cell1.innerText = "Su Su";

const row1cell2 = row1.insertCell(2);
row1cell2.innerText = 15;


const row3 = tbody.insertRow(2);
const row3cell0 = row3.insertCell(0);
row3cell0.innerText = 3;

const row3cell1 = row3.insertCell(1);
row3cell1.innerText = "Htun Htun";

const row3cell2 = row3.insertCell(2);
row3cell2.innerText = 15;

app.append(table);
