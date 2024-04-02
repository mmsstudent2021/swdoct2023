import React, { useState } from "react";

const Box = (props) => {
  // console.log(props);
  const handleOpen = () => {
    setHide(false);
  };

  const handleClose = () => {
    setHide(true);
  };

  const handleToggle = () => {
    // setHide(!hide);
    props.clickBox(props.id);
  };
  return (
    <div className="grid grid-cols-2 px-5 py-3 gap-3">
      <button
        onClick={handleToggle}
        className=" py-3 rounded-lg bg-blue-400  active:scale-90 duration-200 text-white col-span-2 border flex items-center justify-between gap-3 px-5"
      >
        <h1 className="font-serif font-bold text-2xl">
          {props.question} [ {props.id} ]
        </h1>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6 duration-200 ${!props.hide && "rotate-180"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
          />
        </svg>
      </button>

      <div
        className={` ${
          props.hide && "hidden"
        } p-5 rounded-lg bg-gray-100 col-span-2 border`}
      >
        <p>{props.answer}</p>
      </div>
    </div>
  );
};

export default Box;
