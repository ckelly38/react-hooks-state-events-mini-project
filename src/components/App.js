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
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter mcats={CATEGORIES} setType={setMyType} />
      <NewTaskForm />
      <TaskList mytasks={myTasks} showtype={myType} mySetTasks={setMyTasks} />
    </div>
  );
}

export default App;
