import React, { useState } from "react";

const ListCreateFrom = (props) => {
  const [text, setText] = useState("");

  const handleTextInput = (event) => {
    setText(event.target.value);
  };

  const handleAddBtn = () => {
    props.addTask(text);
    setText("")
  };

  return (
    <div className="flex mb-5">
      <input
        className="flex-grow border border-neutral-700 h-14 px-3 focus-visible:outline-none"
        type="text"
        id="textInput"
        value={text}
        onChange={handleTextInput}
      />
      <button
        onClick={handleAddBtn}
        className="h-14 w-14 bg-neutral-700 text-white flex justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4 stroke-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
};

export default ListCreateFrom;
