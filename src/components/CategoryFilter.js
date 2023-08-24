import React from "react";

function CategoryFilter({mcats, setType}) {
  function handleFilterClick(event)
  {
    setType(event.target.textContent);
  }

  let mycats = mcats.map((mcat) => {
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
