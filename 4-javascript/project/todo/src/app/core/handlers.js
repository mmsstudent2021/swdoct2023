import { createList, updateCounter } from "./functions.js";

export const addList = () => {
  console.log("add list fun");

  listGroup.append(createList(textInput.value));
  updateCounter();

  textInput.value = null;
};

export const deleteList = (event) => {
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
};

export const checkList = (event) => {
  const listText = event.target.nextElementSibling;
  listText.classList.toggle("line-through");
  updateCounter();
};

export const editList = (event) => {
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

export const updateList = (event) => {
  console.log("U update");
  const currentValue = event.target.value;
  const list = event.target.closest(".list");
  const listText = list.querySelector(".list-text");

  listText.innerText = currentValue;

  event.target.remove();
  listText.classList.toggle("hidden");
};

export const listGroupHandler = (event) => {
  console.log(event.target);
  if (event.target.classList.contains("list-del-btn")) {
    // console.log("U del list");
    deleteList(event);
  } else if (event.target.classList.contains("list-edit-btn")) {
    editList(event);
  }
};
