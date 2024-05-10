import React, { useRef, useState } from "react";
import Container from "./Container";
import { Button, Label, Select, TextInput } from "flowbite-react";

const CheckOutForm = ({ products, addItem }) => {
  const selectRef = useRef();
  const quantityRef = useRef();

  const formRef = useRef();

  const handleForm = (event) => {
    event.preventDefault();

    const id = Date.now();

    const currentProduct = products.find(
      (product) => product.id === parseInt(selectRef.current.value)
    );

    const quantity = parseInt(quantityRef.current.value);

    const cost = (quantity * currentProduct.price).toFixed(2);

    console.log(currentProduct);

    const newItem = {
      id,
      product: currentProduct,
      quantity,
      cost,
    };

    addItem(newItem);

    formRef.current.reset();

    // selectRef.current.value = 1;
    // quantityRef.current.value = null;

    // console.log(selectRef.current.value);
    // console.log(quantityRef.current.value);
  };

  return (
    <>
      <form ref={formRef} onSubmit={handleForm} className=" w-full block mb-5">
        <div className=" grid grid-cols-5 gap-5">
          <div className=" col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="countries" value="Select Product" />
            </div>
            <Select ref={selectRef} id="countries" required>
              {products.map(({ id, title }) => (
                <option value={id} key={id}>
                  {title}
                </option>
              ))}
            </Select>
          </div>

          <div className=" col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="base" value="Input Quantity" />
            </div>
            <TextInput required ref={quantityRef} id="base" type="number" sizing="md" />
          </div>

          <div className=" col-span-1">
            <Button
              type="submit"
              className=" w-full h-full flex justify-center items-center"
            >
              Buy
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CheckOutForm;
