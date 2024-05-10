import React, { useContext } from "react";
import { CounterContext } from "../context/CounterProvider";

const Add = () => {
  const { increment } = useContext(CounterContext);
  return <button onClick={increment}>Add</button>;
};

export default Add;
