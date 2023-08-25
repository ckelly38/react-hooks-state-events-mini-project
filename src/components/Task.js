import React from "react";

function Task({text, category, remTask}) {
  //console.log("text = ", text);
  //console.log("category = ", category);
  //console.log("remTask = ", remTask);
  if (text === undefined || text === null || category === undefined || category === null)
  {
    throw new Error("the text and the category for the new task must be defined and not null!");
  }
  else
  {
    if (text.length < 1 || category.length < 1)
    {
      throw new Error("the text and the category for the new task must not be empty!");
    }
    //else;//do nothing
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={remTask}>X</button>
    </div>
  );
}

export default Task;
