import React, { createElement } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const root = document.querySelector("#root");

const reactRoot = createRoot(root);

// React Node
// const heading = createElement(
//   "div",
//   null,
//   createElement(
//     "h1",
//     { className: "text-3xl font-bold underline", title: "page title" },
//     "Min Ga Lar Par"
//   ),
//   createElement("p", { className: "text-gray-400" }, "my testing text"),
//   createElement(
//     "a",
//     { href: "https://mms-it.com", target: "_blank" },
//     "See More"
//   )
// );

// const title = "san kyi tar";

// console.dir(document);
// console.log(React);

// is it 2024

const length = 5;
const numbs = Array.from({ length: 5 }, (_, index) => index + 1);

// console.log(numbs);

const d = new Date();
const fruits = ["apple", "banana", "orange", "grape", "strawberry"];
const obj = { a: "aaa", b: "bbb", c: "ccc" };

const hearts = [];

const products = [
  { id: 1, name: "Apple", price: 1.5, stock: 0 },
  { id: 2, name: "Banana", price: 0.75, stock: 150 },
  { id: 3, name: "Orange", price: 2.0, stock: 0 },
  { id: 4, name: "Grapes", price: 3.25, stock: 120 },
  { id: 5, name: "Strawberry", price: 4.0, stock: 90 },
];

for (let i = 1; i <= 5; i++) {
  hearts.push(<h1 key={i}>&hearts;</h1>);
}

// console.log(hearts);

const StockBadge = (num) => {
  if (num === 0) {
    return <b>Out of Stock</b>;
  }
  return num;
};

const heading = (
  <>
    <h2>List Rendering</h2>

    <ul>
      {products.map(({ id, name, price, stock }) => (
        <li key={id}>
          {name} - {price} {stock != 0 && "-" + stock}
        </li>
      ))}
    </ul>

    {/* {fruits.map((fruit) => (
      <li key={fruit}>{fruit}</li>
    ))} */}

    {/* {[1, 2, 3, 4, 5].map((num) => (
      <h1 key={num}>&hearts;</h1>
    ))} */}

    {/* <div>{hearts}</div> */}
  </>
);

// const z = arr.map((x) => {
//   console.log(x);
//   return x;
// });
// console.log(z);

// createElement("ul", null, ['a', 'b', 'c']);

reactRoot.render(<App />); // react node => dom node

// DOM Node
// const heading = document.createElement("h1");
// console.dir(heading);
// const text = document.createTextNode("Min Ga Lar Par");
// heading.append(text);
// heading.className = "text-3xl font-bold underline"
// heading.classList.add("text-3xl");
// heading.classList.add("font-bold");
// heading.classList.add("underline");
// heading.title = "page heading";
// console.log(heading);

// const run = (x,y) => {
//   return x + y;
// }

// run(let x= 5;,)
