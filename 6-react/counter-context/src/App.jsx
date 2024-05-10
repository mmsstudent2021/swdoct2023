import React, { useState } from "react";
import Counter from "./components/Counter";
import Sub from "./components/Sub";
import Add from "./components/Add";
import CounterProvider from "./context/CounterProvider";

const App = () => {


  return (
    <CounterProvider>
      <Counter  />
      <Sub />
      <Add  />
    </CounterProvider>
  );
};

export default App;
