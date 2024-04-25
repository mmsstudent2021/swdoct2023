import React, { useRef } from "react";
import SubHeading from "./SubHeading";
import { Button, Label, TextInput } from "flowbite-react";

const CreateProductForm = ({ addProduct }) => {
  const formRef = useRef();
  const handleForm = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    // console.log(formData.get("product_name"));
    // console.log(formData.get("price"));
    // console.log(formData.get("stock"));
    const newProduct = {
      id: Date.now(),
      title: formData.get("product_name"),
      price: parseFloat(formData.get("price")),
      stock: parseInt(formData.get("stock")),
    };

    addProduct(newProduct);

    formRef.current.reset();
  };
  return (
    <div>
      <SubHeading>Add New Product</SubHeading>
      <form onSubmit={handleForm} ref={formRef}>
        <div className=" grid grid-cols-3 gap-3">
          <div className=" col-span-full ">
            <div className="mb-2 block">
              <Label htmlFor="product_name" value="Product Name" />
            </div>
            <TextInput
              name="product_name"
              id="product_name"
              type="text"
              required
            />
          </div>
          <div className=" col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="price" value="Price" />
            </div>
            <TextInput name="price" id="price" type="number" required />
          </div>
          <div className=" col-span-1">
            <div className="mb-2 block">
              <Label htmlFor="stock" value="Stock" />
            </div>
            <TextInput name="stock" id="stock" type="number" required />
          </div>
          <Button className=" col-span-full" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateProductForm;
