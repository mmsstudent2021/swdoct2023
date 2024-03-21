// selectors
const app = document.querySelector("#app");

// state
const lists = ["to read book", "sleep early", "watch movie"];

// ui render
const createHeading = (text) => {
  const heading = document.createElement("h1");
  heading.innerText = text;
  return heading;
};

const createForm = () => {
  const form = document.createElement("form");
  form.classList.add("create-form");
  const input = document.createElement("input");
  input.classList.add("text-input");
  const button = document.createElement("button");
  button.classList.add("add-btn");
  button.innerText = "Add List";
  form.append(input);
  form.append(button);
  return form;
};

const createListGroup = () => {
  const ul = document.createElement("ul");
  ul.classList.add("list-group");
  return ul;
};

const createList = (text) => {
  const list = document.createElement("li");
  list.classList.add("list");
  list.innerText = text;
  return list;
};

const renderList = (lists) => {
  const listGroup = app.querySelector(".list-group");
  listGroup.innerHTML = "";
  lists.forEach((list) => listGroup.append(createList(list)));
};

// initial render
(() => {
  app.append(createHeading("Todo App"));
  app.append(createForm());
  app.append(createListGroup());
  renderList(lists);
})();

// listener

app.addEventListener("submit", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("create-form")) {
    const inputText = app.querySelector(".text-input");
    lists.push(inputText.value);
    inputText.value = null;
    renderList(lists);
    // const listGroup = app.querySelector(".list-group");
    // listGroup.append(createList(inputText.value));
    // console.log(inputText.value);
  }
});
