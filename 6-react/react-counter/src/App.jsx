import React from "react";

const App = () => {
  return (
    <div className=" grid grid-cols-2 p-5 gap-5">
      <h1 className=" py-5 rounded-lg bg-gray-100 col-span-2 border text-center font-bold font-serif text-5xl">
        1
      </h1>
      <button className=" py-3 rounded-lg bg-gray-400 text-white col-span-1 border text-center">
        Sub
      </button>
      <button className=" py-3 rounded-lg bg-gray-400 text-white col-span-1 border text-center">
        Add
      </button>
    </div>
  );
};

export default App;
