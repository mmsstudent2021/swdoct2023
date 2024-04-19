import React, { useState } from "react";

const Clicker = () => {
  const [num, setNum] = useState(1);

  const handleButton = () => {
    setNum((prev) => prev + 1); // 2
    setNum((prev) => prev + 1); // 2
    setNum((prev) => prev + 1); // 2
    // setNum((prev) => prev + 1); // 3
    // setNum((prev) => prev + 1); // 4
    // setNum(num + 1); // 2
    // setNum(num + 1); // 2
  };
  return (
    <>
      <h1>Your Number : {num}</h1>
      <button onClick={handleButton}>Add</button>
    </>
  );
};

export default Clicker;
