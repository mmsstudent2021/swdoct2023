import { handleCategoryGroup } from "../app/category";
import { handleProductGroup } from "../app/product";
import { categoryGroup, productGroup } from "./selectors";

const listener = () => {
  categoryGroup.addEventListener("click", handleCategoryGroup);
  productGroup.addEventListener("click", handleProductGroup);
};

export default listener;
