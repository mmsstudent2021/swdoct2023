import { products } from "../core/data";
import { categoryGroup, categoryTemplate } from "../core/selectors";
import { renderProduct } from "./product";

export const createCategory = (categoryName) => {
  const template = categoryTemplate.content.cloneNode(true);
  template.querySelector(".cat-btn").innerText = categoryName;
  return template;
};

export const renderCategory = (categories) => {
  categories.forEach((cat) => categoryGroup.append(createCategory(cat)));
};

export const handleCategoryGroup = (event) => {
  if (event.target.classList.contains("cat-btn")) {
    const currentCategoryBtn = event.target;
    // console.log(currentCategoryBtn);

    // console.log(document.querySelector(".cat-btn.active"));
    document.querySelector(".cat-btn.active")?.classList.remove("active")

    currentCategoryBtn.classList.add("active");

    const currentCategory = event.target.innerText;

    renderProduct(
      products.filter(
        (el) => el.category === currentCategory || currentCategory === "All"
      )
    );
  }
};
