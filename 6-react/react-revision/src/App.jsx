import React, { useState } from "react";
import List from "./components/List";
import ProductForm from "./components/ProductForm";
import Clicker from "./components/Clicker";
import CreateForm from "./components/CreateForm";

const App = () => {
  const [products, setProduct] = useState([
    { id: 1, name: "Apple", price: 1.5, stock: 0 },
    { id: 2, name: "Banana", price: 0.75, stock: 150 },
    { id: 3, name: "Orange", price: 2.0, stock: 0 },
    { id: 4, name: "Grapes", price: 3.25, stock: 120 },
    { id: 5, name: "Strawberry", price: 4.0, stock: 90 },
  ]);

  const addProduct = (newProduct) => {
    setProduct([...products, newProduct]);
    // products.push(newProduct);
  };

  //   console.log(products);
  //   console.log(setProduct(nextState));

  //   console.log(products[0]);
  //   console.log(products[1]);
  //   console.log(React);
  return (
    <div>
      {/* <Clicker /> */}
      <h1>Product List</h1>
      {products.map((product) => (
        <List key={product.id} {...product} />
      ))}
      {/* <ProductForm /> */}
      <CreateForm />
    </div>
  );
};

export default App;
