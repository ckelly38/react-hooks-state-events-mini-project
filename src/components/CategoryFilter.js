import React from "react";

function CategoryFilter({categories, setType}) {
  function handleFilterClick(event)
  {
    const mybtns = event.target.parentNode.children;
    for (let n = 0; n < mybtns.length; n++) mybtns[n].className = "";
    event.target.className = "selected";
    setType(event.target.textContent);
  }

  let mycats = categories.map((mcat) => {
    return <button key={mcat} className={""} onClick={handleFilterClick}>{mcat}</button>;
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {mycats}
    </div>
  );
}

export default CategoryFilter;
