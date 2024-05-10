import React from "react";
import MainHeading from "./MainHeading";
import SubHeading from "./SubHeading";
import { HiOutlineXMark } from "react-icons/hi2";
import { Button } from "flowbite-react";
import CreateProductForm from "./CreateProductForm";

const Drawer = ({ isDrawerOpen, handleDrawer, products,addProduct }) => {
  return (
    <div
      className={`fixed shadow bg-white duration-300 right-0 top-0 w-[350px] h-screen overflow-scroll p-3 ${
        !isDrawerOpen && "translate-x-full "
      }`}
    >
      <div className=" flex justify-between items-center mb-5">
        <div className="">
          <MainHeading>Your Product</MainHeading>
          <SubHeading>Manage Product</SubHeading>
        </div>

        <Button onClick={handleDrawer} color="gray">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </Button>
      </div>

      <div className="">
        {products.map(({ id, title, price, stock }) => (
          <div key={id} className=" flex justify-between items-center border p-3 mb-3 rounded">
            <p>
              {title} <span className=" font-mono">({stock})</span>
            </p>
            <p className=" font-mono">{price}</p>
          </div>
        ))}
      </div>

      <CreateProductForm addProduct={addProduct} />
    </div>
  );
};

export default Drawer;
