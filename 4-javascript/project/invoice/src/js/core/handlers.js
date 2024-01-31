import {
  addRecordQuantity,
  createRecord,
  deleteRecord,
  subRecordQuantity,
  updateRecordTotal,
} from "./record.js";
import { createForm, inventorySheet, recordTotal, rowGroup } from "./selectors.js";
import { products } from "./variables.js";

export const createFormHandler = (e) => {
  e.preventDefault();
  //   console.log(productSelect.value);
  //   console.log(inputQuantity.valueAsNumber);

  // data
  const formData = new FormData(createForm);
  const currentProductId = parseInt(formData.get("productSelect"));
  const currentProduct = products.find((el) => el.id === currentProductId);
  const currentQuantity = parseInt(formData.get("inputQuantity"));

  // is exited row
  const isExistedRow = rowGroup.querySelector(
    `[row-product-id='${currentProductId}']`
  );

  if (isExistedRow) {
    const currentQuantityElement = isExistedRow.querySelector(".row-quantity");
    const currentCost = isExistedRow.querySelector(".row-cost");
    const currentPrice = isExistedRow.querySelector(".row-product-price");
    currentQuantityElement.innerText =
      parseInt(currentQuantityElement.innerText) + currentQuantity;
    currentCost.innerText =
      currentPrice.innerText * currentQuantityElement.innerText;
  } else {
    // append row to table
    rowGroup.append(createRecord(currentProduct, currentQuantity));
  }

  // calculate total
  updateRecordTotal();
  createForm.reset();
};

export const rowGroupHandler = (event) => {
  if (event.target.classList.contains("row-del-btn")) {
    deleteRecord(event);
  } else if (event.target.classList.contains("row-q-add")) {
    addRecordQuantity(event);
  } else if (event.target.classList.contains("row-q-sub")) {
    subRecordQuantity(event);
  }
};

export const manageInventoryBtnHandler = () => {
  inventorySheet.classList.toggle("-translate-x-full");
}
