import React, { useState } from "react";

const ProductForm = () => {
  const [nameInput, setNameInput] = useState("");
  const [priceInput, setPriceInput] = useState(0);
  const [stockInput, setStockInput] = useState(0);

  const handleNameInput = (e) => {
    setNameInput(e.target.value);
  };

  const handlePriceInput = (e) => {
    setPriceInput(e.target.value);
  };

  const handleStockInput = (e) => {
    setStockInput(e.target.value);
  };

  const handleForm = (e) => {
    console.log(nameInput, priceInput, stockInput);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleForm}>
      <input
        required
        type="text"
        placeholder="Product name"
        value={nameInput}
        onChange={handleNameInput}
      />
      <input
        required
        type="number"
        onChange={handlePriceInput}
        placeholder="Price"
        value={priceInput}
      />
      <input
        required
        type="number"
        onChange={handleStockInput}
        placeholder="Stock"
        value={stockInput}
      />
      <button>Add Product</button>
    </form>
  );
};

export default ProductForm;
