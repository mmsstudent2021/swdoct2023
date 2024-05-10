import React, { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProduct] = useState([
    {
      id: 1,
      title: "Apple",
      price: 0.99,
      stock: 100,
    },
    {
      id: 2,
      title: "Banana",
      price: 0.49,
      stock: 80,
    },
    {
      id: 3,
      title: "Orange",
      price: 1.29,
      stock: 70,
    },
    {
      id: 4,
      title: "Grapes",
      price: 2.99,
      stock: 50,
    },
    {
      id: 5,
      title: "Strawberry",
      price: 3.49,
      stock: 40,
    },
  ]);

  const addProduct = (newProduct) => {
    setProduct([...products, newProduct]);
  };
  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
