import React from "react";
import Heading from "./Heading";
import ListCreateFrom from "./ListCreateFrom";
import ListStatus from "./ListStatus";
import ListGroup from "./ListGroup";

const App = () => {
  return (
    <div className="w-[400px] mx-auto mt-20">
      <Heading text="Todo App" />
      <ListCreateFrom />
      <ListStatus />
      <ListGroup />
    </div>
  );
};

export default App;
