import React, { useState } from "react";
import Container from "./Container";
import { Button, Label, Select, TextInput } from "flowbite-react";

const CheckOutForm = ({ products }) => {
  return (
    <>
      <form className=" w-full block mb-5">
        <div className=" grid grid-cols-5 gap-5">
          <div className=" col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="countries" value="Select Product" />
            </div>
            <Select id="countries" required>
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
            <TextInput id="base" type="number" sizing="md" />
          </div>

          <div className=" col-span-1">
            <Button className=" w-full h-full flex justify-center items-center">
              Buy
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CheckOutForm;
