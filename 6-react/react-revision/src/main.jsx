import React, { createElement } from "react";
import { createRoot } from "react-dom/client";

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

const title = "san kyi tar";

console.dir(document);
console.log(React);

// is it 2024

const d = new Date();
const arr = ["a", "b", "c"];
const obj = { a: "aaa", b: "bbb", c: "ccc" };

const heading = (
  <>
    <h1
      id="heading"
      className="text-3xl font-bold underline"
      title="page title"
      style={{
        color: "red",
        backgroundColor: "black",
      }}
    >
      {/* It is {d.getFullYear()} */}
      {/* {obj} */}
    </h1>
    <p>my testing paragraph par</p>
    <form action="">
      <label htmlFor="aa">your name</label>
      <input type="text" id="aa" className="" />
    </form>

    <ul>
      {arr.map((x) => (
        <li key={x}>{x}</li>
      ))}
    </ul>
    <a href="https://mms-it.com">See More</a>
  </>
);

// const z = arr.map((x) => {
//   console.log(x);
//   return x;
// });
// console.log(z);

// createElement("ul", null, ['a', 'b', 'c']);

reactRoot.render(heading); // react node => dom node

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
