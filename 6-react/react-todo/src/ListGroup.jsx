import React from "react";
import EmptyList from "./EmptyList";
import List from "./List";

const ListGroup = (props) => {
  return (
    <div id="listGroup">
      <EmptyList />

      {props.tasks.map((task) => (
        <List
          checkTask={props.checkTask}
          deleteTask={props.deleteTask}
          editTask={props.editTask}
          key={task.id}
          job={task.job}
          isDone={task.isDone}
          id={task.id}
        />
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
