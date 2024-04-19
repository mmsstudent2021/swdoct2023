import React, { useRef } from "react";

const CreateForm = () => {
  const nameInput = useRef("");
  const priceInput = useRef(0);
  const stockInput = useRef(0);

  const handleForm = (e) => {
    e.preventDefault();
    console.log(nameInput.current);
    console.log(nameInput.current.value);
    console.log(priceInput.current.value);
    console.log(stockInput.current.value);
  };
  return (
    <form onSubmit={handleForm}>
      <input required type="text" ref={nameInput} placeholder="Product name" />
      <input required type="number" ref={priceInput} placeholder="Price" />
      <input required type="number" ref={stockInput} placeholder="Stock" />
      <button>Add Product</button>
    </form>
  );
};

export default CreateForm;
