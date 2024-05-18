import React, { useContext } from "react";
import useCountStore from "../stores/CountStore";

const Sub = () => {
  const { decrement } = useCountStore();
  return <button onClick={decrement}>Sub</button>;
};

export default Sub;
