import React from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";

function TaskList({tasks, category = "All", mySetTasks}) {
  function handleDelTask(event)
  {
    let mytext = event.target.parentNode.getElementsByClassName("text")[0].textContent;
    let mynwtasks = tasks.filter((mtask) => {
      if (mtask.text === mytext) return false;
      else return true;
    });
    mySetTasks(mynwtasks);
    return;
  }

  let mdsptasks = null;
  if (category === "All") mdsptasks = tasks;
  else mdsptasks = tasks.filter((mtask) => (mtask.category === category));
  let mytasksarr = mdsptasks.map((mtask) => {
    //console.log("mtask = ", mtask);
    return ( <Task key={uuid()} text={mtask.text} category={mtask.category} remTask={handleDelTask} /> );
  });

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {mytasksarr}
    </div>
  );
}

export default TaskList;
