import React, { useContext } from "react";
import useCountStore from "../stores/CountStore";

const Add = () => {
  const { increment } = useCountStore();
  return <button onClick={increment}>add</button>;
};

export default Add;
