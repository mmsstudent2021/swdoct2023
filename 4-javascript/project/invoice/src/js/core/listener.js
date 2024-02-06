import {
  createFormHandler,
  manageInventoryBtnHandler,
  newProductCreateFormHandler,
  rowGroupHandler,
} from "./handlers.js";
import {
  createForm,
  inventorySheetCloseBtn,
  manageInventoryBtn,
  newProductCreateForm,
  rowGroup,
} from "./selectors.js";

const listener = () => {
  createForm.addEventListener("submit", createFormHandler);
  rowGroup.addEventListener("click", rowGroupHandler);
  manageInventoryBtn.addEventListener("click", manageInventoryBtnHandler);
  inventorySheetCloseBtn.addEventListener("click", manageInventoryBtnHandler);
  newProductCreateForm.addEventListener("submit",newProductCreateFormHandler)
};

export default listener;
