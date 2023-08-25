import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const myusecats = categories.filter((mcat) => (mcat !== "All"));
  const myopts = myusecats.map((mcat) => {
    return ( <option key={mcat}>{mcat}</option> );
  });

  const [formData, setFormData] = useState({
    text: "",
    category: myusecats[0]
  });

  function handleSubmit(event)
  {
    event.preventDefault();
    //console.log("formData", formData);
    onTaskFormSubmit(formData);
  }

  function textOrCatChange(event, mkey)
  {
    if (event === undefined || event === null)
    {
      throw new Error("event is required and must be defined!");
    }
    //else;//do nothing

    if (mkey === undefined || mkey === null)
    {
      throw new Error("mkey must be defined!");
    }
    else
    {
      if (mkey === "text" || mkey === "category");
      else throw new Error("invlaid key was used!");
    }
    //console.log("mkey = " + mkey);
    //console.log("event.target = ", event.target);

    const mynwobj = {
      ...formData,
      [mkey]: event.target.value
    };
    setFormData(mynwobj);
  }
  function textChange(event)
  {
    textOrCatChange(event, "text");
  }
  function catChange(event)
  {
    textOrCatChange(event, "category");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={textChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={catChange}>
          {/* render <option> elements for each category here */}
          {myopts}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
