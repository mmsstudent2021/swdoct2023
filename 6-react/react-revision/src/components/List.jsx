import React from "react";

const List = ({ name, price }) => {
  return (
    <div>
      <b>{name}</b> = {price}
    </div>
  );
};

export default List;
