import React from "react";
import Task from "./Task";
//import { v4 as uuid } from "uuid";

function TaskList({mytasks, showtype, mySetTasks}) {
  function handleDelTask(event)
  {
    let mytext = event.target.parentNode.getElementsByClassName("text")[0].textContent;
    let mynwtasks = mytasks.filter((mtask) => {
      if (mtask.text === mytext) return false;
      else return true;
    });
    mySetTasks(mynwtasks);
  }

  let mdsptasks = null;
  if (showtype === "All") mdsptasks = mytasks;
  else mdsptasks = mytasks.filter((mtask) => (mtask.category === showtype));
  let mytasksarr = mdsptasks.map((mtask) => {
    return ( <Task key={mtask.text} text={mtask.text} catg={mtask.category} remTask={handleDelTask} /> );
  });

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {mytasksarr}
    </div>
  );
}

export default TaskList;
