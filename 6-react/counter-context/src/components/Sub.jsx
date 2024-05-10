import React, { useContext } from "react";
import { CounterContext } from "../context/CounterProvider";

const Sub = () => {
  const { decrement } = useContext(CounterContext);
  return <button onClick={decrement}>Sub</button>;
};

export default Sub;
