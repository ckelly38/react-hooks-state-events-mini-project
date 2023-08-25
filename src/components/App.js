import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [myTasks, setMyTasks] = useState(TASKS);
  const [myType, setMyType] = useState("All");
  
  function onTaskFormSubmit(nwTask)
  {
    //console.log("nwTask", nwTask);
    if (nwTask === undefined || nwTask === null) throw new Error("the new task is not allowed to be null!");
    else
    {
      if (myTasks === undefined || myTasks === null || myTasks.length < 1);
      else
      {
        for (let n = 0; n < myTasks.length; n++)
        {
          if (myTasks[n].text === nwTask.text)
          {
            if (myTasks[n].category === nwTask.category)
            {
              const myerrmsg = "Error: task is already on the list with text (" + myTasks[n].text +
                ") and category (" + myTasks[n].category + ")!";
              alert(myerrmsg);
              throw new Error(myerrmsg);
            }
            //else;//do nothing
          }
          //else;//do nothing
        }
      }

      setMyTasks([...myTasks, nwTask]);
    }
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} setType={setMyType} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={myTasks} category={myType} mySetTasks={setMyTasks} />
    </div>
  );
}

export default App;
