import React from "react";

function Task({text, catg}) {
  if (text === undefined || text === null || catg === undefined || catg === null)
  {
    throw new Error("the text and the category for the new task must be defined and not null!");
  }
  else
  {
    if (text.length < 1 || catg.length < 1)
    {
      throw new Error("the text and the category for the new task must not be empty!");
    }
    //else;//do nothing
  }

  return (
    <div className="task">
      <div className="label">{catg}</div>
      <div className="text">{text}</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
