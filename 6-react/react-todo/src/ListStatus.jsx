import React from "react";

const ListStatus = (props) => {
  return (
    <div className="flex justify-between mb-5">
      <h3 className="text-2xl font-bold">Your List</h3>
      <div className="flex items-center bg-neutral-700 text-white px-3 rounded-full text-sm py-1">
        Done ({" "}
        <span id="doneCount">
          {props.tasks.filter((task) => task.isDone === true).length}
        </span>
        /<span id="listCount">{props.tasks.length}</span> )
      </div>
    </div>
  );
};

export default ListStatus;
