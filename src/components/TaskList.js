import React from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";

function TaskList({mytasks}) {
  let mytasksarr = mytasks.map((mtask) => {
    return ( <Task key={uuid()} text={mtask.text} catg={mtask.category}/> );
  });

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {mytasksarr}
    </div>
  );
}

export default TaskList;
