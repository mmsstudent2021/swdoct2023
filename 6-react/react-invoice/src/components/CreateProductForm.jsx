import React from "react";
import SubHeading from "./SubHeading";
import { Button, Label, TextInput } from "flowbite-react";

const CreateProductForm = () => {
  return (
    <div>
      <SubHeading>Add New Product</SubHeading>
      <form action="">
        <div className=" grid grid-cols-3 gap-3">
          <div className=" col-span-full ">
            <div className="mb-2 block">
              <Label htmlFor="product_name" value="Product Name" />
            </div>
            <TextInput id="product_name" type="text" required />
          </div>
          <div className=" col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="price" value="Price" />
            </div>
            <TextInput id="price" type="number" required />
          </div>
          <div className=" col-span-1">
            <div className="mb-2 block">
              <Label htmlFor="stock" value="Stock" />
            </div>
            <TextInput id="stock" type="number" required />
          </div>
          <Button className=" col-span-full" type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default CreateProductForm;
