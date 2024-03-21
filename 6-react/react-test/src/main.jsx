import { createElement } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.querySelector("#root");

// console.log(rootElement);

const root = createRoot(rootElement);

const tasks = [
  "Read js book",
  "learn react",
  "sleep early",
  "meet with client",
];

// const result = tasks.map((task) => console.log(task));

// console.log(result);

root.render(
  createElement(
    "div",
    null,
    createElement("h1", null, "Todo App"),
    createElement(
      "form",
      null,
      createElement("input", null),
      createElement("button", null, "Add List")
    ),
    createElement(
      "ul",
      null,
      tasks.map((task, index) => createElement("li", { key: index }, task))
      // createElement("li", null, "Read js book"),
      // createElement("li", null, "learn react"),
      // createElement("li", null, "sleep early")
    )
  )
);

// <h1>min ga lar par</h1>
// dom
// const h1 = document.createElement("h1");
// h1.innerText = "Min Ga Lar Par";
// document.body.append(h1);
