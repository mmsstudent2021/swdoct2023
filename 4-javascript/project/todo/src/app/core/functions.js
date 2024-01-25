export const updateCounter = () => {
  totalCount.innerText = countListTotal();
  doneCount.innerText = countDoneListTotal();
};

const countListTotal = () => {
  return document.querySelectorAll(".list").length;
};

export const countDoneListTotal = () => {
  return document.querySelectorAll(".list .list-checkbox:checked").length;
};

export const createList = (text) => {
  const list = listTemplate.content.cloneNode(true);
  const listText = list.querySelector(".list-text");
  const listDelBtn = list.querySelector(".list-del-btn");
  const listEditBtn = list.querySelector(".list-edit-btn");
  const listCheckbox = list.querySelector(".list-checkbox");

  listText.innerText = text;

  return list;
};
