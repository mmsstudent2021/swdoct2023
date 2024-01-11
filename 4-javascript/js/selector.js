console.log("query selector");

// tag

// const els = document.querySelectorAll("li");
// for (el of els) {
//   console.log(el);
//   el.innerText += " - added";
// }
// els.forEach((el,index) => el.innerText += " - loop "+index)
// console.log(els);
// console.log(els[0]);
// console.log(els[1]);
// console.log(els[2]);

// id
// const yourName = document.querySelector("#yourName");
// yourName.value = "hello hello";

// class
// const lis = document.querySelectorAll("li.a");
// console.log(lis);

// attribute
// const yourName = document.querySelector(`[name='your_name']`);
// console.log(yourName);
// yourName.value = "haha";

// pseudo class

const h1 = document.querySelector("h1");

// get class
// console.log(h1.classList);
// console.log(h1.className);

// set class
// h1.className = "dd ee ff"
// h1.className += " dd";
// h1.className += " ee";
// h1.className += " ff";

// h1.classList.add("dd")
// h1.classList.add("ee")
// h1.classList.add("ff")

// h1.classList.remove("bb");
// h1.classList.replace("bb","xx")

// h1.classList.toggle("bb")

// console.log(h1.classList.contains("aa"));
// console.log(h1.classList.contains("xx"));

// console.dir(h1);
// set style
// h1.style.color = "red";
// h1.style.backgroundColor = "yellow";
// h1.style.textAlign = "center";
// h1.style.padding = "10px";

// get style
// console.log(h1.style);
// console.log(h1.style.color);
// console.log(h1.style.textAlign);
// console.log(h1.style.fontSize);

// case
// kebab background-color
// camel backgroundColor

// const link1 = document.querySelector("#link1");
// const link2 = document.querySelector("#link2");

// get attr
// console.log(link1.href);
// console.log(link2.href);
// console.log(link2.getAttribute("href"));

// set attr
// link1.href = "https://youtube.com"
// link2.setAttribute("href","https://mms-it.com")

// link1.setAttribute("target", "_blank");
// link2.setAttribute("my-name", "hein htet zan");

const poeImg = document.querySelector("#poeImg");

console.log(poeImg);
console.log(poeImg.src);
console.log(poeImg.getAttribute("src"));

// poeImg.src = "images/poe-mamhe-thar-6.jpg"

const changeImg = (src) => {
  poeImg.src = src;
};

const hsPhoto = document.querySelector(".hs-photo");

const toggleImg = () => {
  hsPhoto.classList.toggle("active");
};
