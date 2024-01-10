// area function

const area = (w, h) => w * h;

// console.log(area(16, 80));
// user level

// output
// window.alert("san kyi tar")

// input;
// const width = window.prompt("Width");
// const height = window.prompt("height");
// window.alert(area(width,height))
// document.write(area(width, height));

// const x = window.confirm("ထမင်းစားပြီးပြီလား");
// console.log(x);
// window.alert(x ? "စားစားပြီးပြီ" : "မစားရသေးပါ");

// console.log(window.console);

// alert("hello");
// confirm("hello");

// document.write("Hello")
// document.write("Hein Htet Zan Par")

// console.log(document);

// select

const heading = document.getElementById("heading");
const btn = document.getElementById("btn");
const list1 = document.getElementById("list-1");
const lists = document.getElementById("lists");
const textInput = document.getElementById("textInput");

const run = () => {
  // input
  const data = textInput.value;

  // output
  heading.innerText = data;
  textInput.value = null;
};

// console.dir(heading);
// console.dir(heading.innerHTML);
// console.dir(heading.innerText);

// console.dir(btn);
// console.dir(btn.innerText);
// console.dir(btn.innerHTML);

// console.dir(lists)
// console.dir(lists.innerText)
// console.dir(lists.innerHTML)

// heading.innerText = "ha ha"
