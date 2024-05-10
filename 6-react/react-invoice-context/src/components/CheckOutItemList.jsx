import React, { useContext } from "react";
import { Button, Table } from "flowbite-react";
import { HiMiniPlus } from "react-icons/hi2";
import { HiMiniMinus } from "react-icons/hi2";
import List from "./List";
import { GeneralContext } from "../context/GeneralProvider";
import { ItemContext } from "../context/ItemProvider";

const CheckOutItemList = () => {
  const { items, addItem } = useContext(ItemContext);

  const total = items.reduce((pv, cv) => pv + parseFloat(cv.cost), 0);
  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell className=" text-end">Price</Table.HeadCell>
          <Table.HeadCell className=" text-end">Quantity</Table.HeadCell>
          <Table.HeadCell className=" text-end">Cost</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {items.map((item) => (
            <List key={item.id} item={item} />
          ))}

          {items.length === 0 && (
            <Table.Row>
              <Table.Cell
                colSpan={5}
                className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-center"
              >
                There is no record
              </Table.Cell>
            </Table.Row>
          )}

          <Table.Row>
            <Table.Cell className=" text-end" colSpan={3}>
              Total
            </Table.Cell>
            <Table.Cell className=" text-end">$ {total.toFixed(2)}</Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default CheckOutItemList;
