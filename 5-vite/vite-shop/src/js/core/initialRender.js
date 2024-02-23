import { renderCategory } from "../app/category";
import { renderProduct } from "../app/product";
import { categories, products } from "./data";

const initialRender = () => {
  renderCategory(categories);
  renderProduct(products);
};

export default initialRender;
