import React, { useContext } from "react";
import { Table, Button } from "flowbite-react";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import { GeneralContext } from "../context/GeneralProvider";

const List = ({ item }) => {
  const { removeItem, updateItemQuantity } = useContext(GeneralContext);

  const handleDelButton = () => {
    // if (confirm("Are you Sure to Delete ?")) {
    //   removeItem(item.id);
    // }
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeItem(item.id);
      }
    });
  };

  const handleQuantityAdd = () => {
    updateItemQuantity(item.id, 1);
  };

  const handleQuantitySub = () => {
    if (item.quantity > 1) {
      updateItemQuantity(item.id, -1);
    } else {
      toast.error("Quantity must grater than 1", {
        duration: 1000,
        position: "bottom-left",
      });
    }
  };
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {item.product.title}
      </Table.Cell>
      <Table.Cell className=" text-end">{item.product.price}</Table.Cell>
      <Table.Cell className=" text-end">
        <div className=" flex justify-end items-center gap-2">
          <Button onClick={handleQuantitySub} color="gray" size="xs">
            {/* <HiMiniMinus /> */} -
          </Button>
          {item.quantity}
          <Button onClick={handleQuantityAdd} color="gray" size="xs">
            {/* <HiMiniPlus /> */} +
          </Button>
        </div>
      </Table.Cell>
      <Table.Cell className=" text-end">$ {item.cost}</Table.Cell>
      <Table.Cell>
        <Button
          onClick={handleDelButton}
          color="gray"
          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
        >
          Remove
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default List;
