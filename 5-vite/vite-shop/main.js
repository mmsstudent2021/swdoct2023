import Shop from "./src/js/Shop";
// import { createProduct } from "./src/js/app/product";
import { products } from "./src/js/core/data";
// import { createCategory } from "./src/js/app/category";
import "./style.css";
import "flowbite";

const shop = new Shop();
shop.init();

// console.log(createCategory("hello"));
// console.log(createProduct(products[0]));

// console.log(products.filter(el => el.category === "electronics"));
