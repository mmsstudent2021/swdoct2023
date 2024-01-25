// Selectors
const app = document.querySelector("#app");
const textInput = document.querySelector("#textInput");
// const checkAll = document.querySelector("#checkAll");
const addBtn = document.querySelector("#addBtn");
const listGroup = document.querySelector("#listGroup");
const doneCount = document.querySelector("#doneCount");
const totalCount = document.querySelector("#totalCount");
const listTemplate = document.querySelector("#listTemplate");

// functions
const updateCounter = () => {
  totalCount.innerText = countListTotal();
  doneCount.innerText = countDoneListTotal();
};

const countListTotal = () => {
  return document.querySelectorAll(".list").length;
};

const countDoneListTotal = () => {
  return document.querySelectorAll(".list .list-checkbox:checked").length;
};

const createList = (text) => {
  const list = listTemplate.content.cloneNode(true);
  const listText = list.querySelector(".list-text");
  const listDelBtn = list.querySelector(".list-del-btn");
  const listEditBtn = list.querySelector(".list-edit-btn");
  const listCheckbox = list.querySelector(".list-checkbox");

  listText.innerText = text;

  // listDelBtn.addEventListener("click", deleteList);
  // listCheckbox.addEventListener("change", checkList);
  // listEditBtn.addEventListener("click", editList);

  // listEditBtn.addEventListener("click", () => {
  //   const input = document.createElement("input");
  //   input.className = "border border-zinc-700 px-2 focus-visible:outline-none";
  //   input.value = listText.innerText;
  //   listText.after(input);
  //   input.focus();
  //   listText.classList.toggle("hidden");

  //   input.addEventListener("blur", () => {
  //     listText.innerText = input.value;
  //     input.remove();
  //     listText.classList.toggle("hidden");
  //   });
  // });

  // listDelBtn.addEventListener("click", () => {
  //   // if (confirm("Are U sure to delete ?")) {
  //   //   list.remove();
  //   // }
  //   // confirm("Are U sure to delete ?") ? list.remove() : ""
  //   confirm("Are U sure to delete ?") && list.remove();
  //   updateCounter();
  //   // totalCount.innerText = parseInt(totalCount.innerText) - 1;
  // });

  // listCheckbox.addEventListener("click", () => {
  //   console.log("u check");
  //   listText.classList.toggle("line-through");
  //   updateCounter();
  // });

  return list;
};

// handler

// const handleCheckAll = () => {
//   checkAll.removeEventListener("click", handleCheckAll);
//   console.log("U click check All");
// };

const addList = () => {
  console.log("add list fun");

  // add to ui
  listGroup.append(createList(textInput.value));
  updateCounter();
  //   totalCount.innerText = parseInt(totalCount.innerText) + 1;

  // clear
  textInput.value = null;
};

const deleteList = (event) => {
  const list = event.target.closest(".list");
  if (confirm("Are U sure to Delete")) {
    list.classList.remove("animate__shakeX");
    list.classList.add("animate__flipOutY");

    const removeList = () => {
      list.removeEventListener("animationend", removeList);
      list.remove();
      updateCounter();
    };

    list.addEventListener("animationend", removeList);
  }
  // console.log(list);
  // console.dir(event.target);
  // console.log(event.target.parentElement.parentElement.parentElement);
  // console.log("U delete");
};

const checkList = (event) => {
  const listText = event.target.nextElementSibling;
  listText.classList.toggle("line-through");
  updateCounter();
  // console.dir(event.target);
};

const editList = (event) => {
  console.log("U edit");
  const list = event.target.closest(".list");
  const listText = list.querySelector(".list-text");

  const input = document.createElement("input");
  input.className = "border border-zinc-700 px-2 focus-visible:outline-none";
  input.value = listText.innerText;
  listText.after(input);
  input.focus();

  listText.classList.toggle("hidden");
  input.addEventListener("blur", updateList);
};

const updateList = (event) => {
  console.log("U update");
  const currentValue = event.target.value;
  const list = event.target.closest(".list");
  const listText = list.querySelector(".list-text");

  listText.innerText = currentValue;

  event.target.remove();
  listText.classList.toggle("hidden");

  // console.log(event.target);
  // () => {
  //   listText.innerText = input.value;
  //   input.remove();
  //   listText.classList.toggle("hidden");
  // }
};

const listGroupHandler = (event) => {
  console.log(event.target);
  if (event.target.classList.contains("list-del-btn")) {
    // console.log("U del list");
    deleteList(event);
  }else if(event.target.classList.contains("list-edit-btn")){
    editList(event);
  }
};

// listener
addBtn.addEventListener("click", addList);
textInput.addEventListener(
  "keyup",
  (event) => event.key === "Enter" && addList()
);

listGroup.addEventListener("click", listGroupHandler);

// checkAll.addEventListener("click", handleCheckAll);

// element.addEventListener("eventType",handler)
