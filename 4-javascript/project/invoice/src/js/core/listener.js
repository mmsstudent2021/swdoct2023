import {
  createFormHandler,
  manageInventoryBtnHandler,
  newProductCreateFormHandler,
  printBtnHandler,
  rowGroupHandler,
} from "./handlers.js";
import {
  createForm,
  inventorySheetCloseBtn,
  manageInventoryBtn,
  newProductCreateForm,
  printBtn,
  rowGroup,
} from "./selectors.js";

const listener = () => {
  createForm.addEventListener("submit", createFormHandler);
  rowGroup.addEventListener("click", rowGroupHandler);
  manageInventoryBtn.addEventListener("click", manageInventoryBtnHandler);
  inventorySheetCloseBtn.addEventListener("click", manageInventoryBtnHandler);
  newProductCreateForm.addEventListener("submit", newProductCreateFormHandler);
  printBtn.addEventListener("click", printBtnHandler);
};

export default listener;
