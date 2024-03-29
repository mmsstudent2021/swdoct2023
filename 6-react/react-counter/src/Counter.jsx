import React, { useState } from "react";

const Counter = () => {
  //   console.log(useState(15));
  const [count, setCount] = useState(1);

  const handleAddBtn = () => {
    console.log("U click add");
    setCount(count + 1);
  };

  const handleSubBtn = () => {
    console.log("U click sub");
    count > 1 && setCount(count - 1);
  };

  return (
    <div className=" grid grid-cols-2 p-5 gap-5">
      <h1 className=" py-5 rounded-lg bg-gray-100 col-span-2 border text-center font-bold font-serif text-5xl">
        {count}
      </h1>
      <button
        onClick={handleSubBtn}
        className=" py-3 rounded-lg bg-gray-400  active:scale-90 duration-200 text-white col-span-1 border text-center"
      >
        Sub
      </button>
      <button
        onClick={handleAddBtn}
        className=" py-3 rounded-lg bg-gray-400 active:scale-90 duration-200 text-white col-span-1 border text-center"
      >
        Add
      </button>
    </div>
  );
};

export default Counter;
