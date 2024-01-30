import { createRecord, updateRecordTotal } from "./record.js";
import { createForm, recordTotal, rowGroup } from "./selectors.js";
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

  // append row to table
  rowGroup.append(createRecord(currentProduct, currentQuantity));
  createForm.reset();

  // calculate total
  updateRecordTotal();
};
