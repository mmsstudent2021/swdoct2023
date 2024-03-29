import React from "react";

const Box = () => {
  return (
    <div className="grid grid-cols-2 p-5 gap-5">
      <button className=" py-3 rounded-lg bg-gray-400  active:scale-90 duration-200 text-white col-span-1 border text-center">
        Open
      </button>
      <button className=" py-3 rounded-lg bg-gray-400 active:scale-90 duration-200 text-white col-span-1 border text-center">
        Close
      </button>
      <div className="p-5 rounded-lg bg-gray-100 col-span-2 border   ">
        <h1 className="font-serif font-bold text-3xl">Content Box</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium,
          placeat quo id, eveniet voluptatem magni culpa assumenda itaque
          aliquam accusamus doloremque libero consequatur nisi! Vero dolores
          ipsa magni ut doloremque!
        </p>
      </div>
    </div>
  );
};

export default Box;
