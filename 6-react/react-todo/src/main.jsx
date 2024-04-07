// jsx

// import { createElement } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./style.css";

const rootElement = document.querySelector("#root");
const root = createRoot(rootElement); // ReactDom Root

root.render(<App />); // react node

// const tasks = ["read js book", "eat less", "sleep early", "meet with sayar"];

// const x = tasks.forEach((el) => console.log(el));
// console.log(x);

// const x = tasks.map((el) => console.log(el));
// console.log(x);

// const heading = document.createElement("h1");
// heading.innerText = "Todo App";

// rootElement.append(heading);

// const root = createRoot(rootElement);
// root.render(
//   createElement(
//     "div",
//     null,
//     createElement("h1", null, "Todo App"),
//     createElement(
//       "form",
//       null,
//       createElement("input", null, null),
//       createElement("button", null, "Add New")
//     ),
//     createElement(
//       "ul",
//       null,
//       // createElement("li", null, "Read Js Book"),
//       // createElement("li", null, "Eat Less"),
//       // createElement("li", null, "Sleep Well")
//       tasks.map((task, index) =>
//         createElement(
//           "li",
//           { key: index, className: "list pb-5", title: "Hello" },
//           task
//         )
//       )
//     )
//   )
// );

// console.log(tasks);

// html
// <h1 class="aa" title='hello'></h1>

// jsx
// <h1 className="aa" title='hello'></h1>

// const area = (x, y) => {
//   return x * y;
// };

// console.log(area(15, 50));
// console.log(area(20, 50));
// console.log(area(10, 45));
