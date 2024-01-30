export const createProduct = (product) => {
  const option = document.createElement("option");
  option.innerText = product.name;
  option.value = product.id;
  return option;
};

export const productRender = (products) => {
  products.forEach((el) => productSelect.append(createProduct(el)));
};
