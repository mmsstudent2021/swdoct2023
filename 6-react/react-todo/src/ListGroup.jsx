import React from "react";
import EmptyList from "./EmptyList";
import List from "./List";

const ListGroup = () => {
  const tasks = [
    {
      id: 1,
      job: "read js book",
      isDone: true,
    },
    {
      id: 2,
      job: "meet with client",
      isDone: true,
    },
    {
      id: 3,
      job: "prepare for interview",
      isDone: false,
    },
    {
      id: 4,
      job: "read react doc",
      isDone: false,
    },
  ];

  return (
    <div id="listGroup">
      <EmptyList />

      {tasks.map((task) => (
        <List job={task.job} isDone={task.isDone} />
      ))}

      {/* <List job="san" isDone={true} />
      <List job="kyi" isDone={false} />
      <List job="tar" isDone={false} /> */}
      {/* {tasks.map((task) => (
        <div
          className={` ${
            task.isDone && "opacity-40 scale-75"
          } border bg-gray-300 border-gray-300 p-2 mb-3`}
          key={task.id}
        >
          <p>
            {task.id} | {task.isDone ? "done" : "not yet"}
          </p>
          <p>{task.job}</p>
        </div>
      ))} */}
    </div>
  );
};

export default ListGroup;
