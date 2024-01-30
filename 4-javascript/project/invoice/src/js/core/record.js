import { recordTotal, rowTemplate } from "./selectors.js";

// let recordIndex = 1;

export const createRecord = (product, quantity) => {
  const rowCost = product.price * quantity;
  const record = rowTemplate.content.cloneNode(true);
  console.log(record);

  //   record.querySelector(".row-no").innerText = recordIndex++;
  record.querySelector(".row-product-name").innerText = product.name;
  record.querySelector(".row-product-price").innerText = product.price;
  record.querySelector(".row-quantity").innerText = quantity;
  record.querySelector(".row-cost").innerText = rowCost;

  return record;
};

export const updateRecordTotal = () => {
  const allRowCost = document.querySelectorAll(".row-cost");
  let total = 0;
  allRowCost.forEach((el) => (total += parseFloat(el.innerText)));
  recordTotal.innerText = total;
};
